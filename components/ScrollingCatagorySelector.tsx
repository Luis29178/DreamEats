import {
  LayoutChangeEvent,
  ScrollView,
  StyleSheet,
  Text,
  View,
  NativeSyntheticEvent,
  NativeScrollEvent,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { Colors } from "@/constants/Colors";

type propTypes = {
  categoryBar: React.ReactNode[];
  contentView: React.ReactNode[];
  indexStateSelector: React.Dispatch<React.SetStateAction<number>>;
  selectedIndex: number;
  parentDimensions: {
    width: number;
    height: number;
  };
  setParentDimensions: React.Dispatch<
    React.SetStateAction<{
      width: number;
      height: number;
    }>
  >;
  scrollPercentage?: number;
  setScrollPercentage?: React.Dispatch<React.SetStateAction<number>>;
  positionIndex?: number;
  setPositionIndex?: React.Dispatch<React.SetStateAction<number>>;
};

const ScrollingCatagorySelector = ({
  categoryBar,
  contentView,
  selectedIndex,
  indexStateSelector,
  parentDimensions,
  setParentDimensions,
  scrollPercentage,
  setScrollPercentage,
  positionIndex,
  setPositionIndex,
}: propTypes) => {
  const scrollViewRef = useRef<ScrollView>(null);

  useEffect(() => {
    const position = selectedIndex * parentDimensions.width;
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollTo({ x: position, animated: true });
    }
  }, [selectedIndex]);

  // Function to capture the dimensions of the parent View
  const onParentLayout = (event: LayoutChangeEvent) => {
    const { width, height } = event.nativeEvent.layout;
    setParentDimensions({ width, height });
  };
  const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const scrollX = event.nativeEvent.contentOffset.x;
    const width = parentDimensions.width;
    const position = Math.floor(scrollX / width); // Current page index
    const offset = scrollX - position * width; // Offset from the start of the current page
    const currentScrollPercentage = offset / width;
    setScrollPercentage != undefined
      ? setScrollPercentage(currentScrollPercentage)
      : {};
  };
  const onMomentumScrollEnd = (
    event: NativeSyntheticEvent<NativeScrollEvent>
  ) => {
    const scrollX = event.nativeEvent.contentOffset.x;
    const width = parentDimensions.width;

    // Threshold is 50% of the view width
    const halfWidth = width / 2;
    const position = Math.floor(scrollX / width);
    setPositionIndex !== undefined ? setPositionIndex(position) : {};
    indexStateSelector(position);

    if (scrollX > position * width + halfWidth) {
      // Scroll to next view
      scrollViewRef.current?.scrollTo({
        x: (position + 1) * width,
        animated: true,
      });
    } else {
      // Scroll to previous view
      scrollViewRef.current?.scrollTo({ x: position * width, animated: true });
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.upperScrollView}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {categoryBar}
        </ScrollView>
      </View>

      <View style={styles.lowerScrollView} onLayout={onParentLayout}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          onScroll={onScroll}
          onMomentumScrollEnd={onMomentumScrollEnd}
          scrollEventThrottle={16} // Adjust as needed for smoothness vs. performance
          ref={scrollViewRef}
          pagingEnabled={true}
        >
          {contentView}
        </ScrollView>
      </View>
    </View>
  );
};

export default ScrollingCatagorySelector;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  lowerScrollView: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  upperScrollView: {
    zIndex: 9001,
    height: 50,
    backgroundColor: Colors.white,
    paddingHorizontal: 5,
    paddingVertical: 5,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.15,
    shadowRadius: 2,

    elevation: 1,
  },
});
