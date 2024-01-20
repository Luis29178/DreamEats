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

};

const ScrollingCatagorySelector = ({categoryBar}: propTypes) => {
  const [parentDimensions, setParentDimensions] = useState({
    width: 0,
    height: 0,
  });
  const scrollViewRef = useRef<ScrollView>(null);
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const [positionIndex, setPositionIndex] = useState(0);

  // Function to capture the dimensions of the parent View
  const onParentLayout = (event: LayoutChangeEvent) => {
    const { width, height } = event.nativeEvent.layout;
    console.log(width, height);
    setParentDimensions({ width, height });
  };

  const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const scrollX = event.nativeEvent.contentOffset.x;
    const width = parentDimensions.width;
    const position = Math.floor(scrollX / width); // Current page index
    const offset = scrollX - position * width; // Offset from the start of the current page
    const currentScrollPercentage = offset / width;

    setScrollPercentage(currentScrollPercentage);
    console.log(
      currentScrollPercentage.toFixed(2),
      scrollPercentage.toFixed(2)
    );
  };

  const onMomentumScrollEnd = (
    event: NativeSyntheticEvent<NativeScrollEvent>
  ) => {
    const scrollX = event.nativeEvent.contentOffset.x;
    const width = parentDimensions.width;

    // Threshold is 50% of the view width
    const halfWidth = width / 2;
    const position = Math.floor(scrollX / width);

    console.log(position);
    setPositionIndex(position);

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
          <View
            style={{
              width: parentDimensions.width,
              height: parentDimensions.height,
              backgroundColor: Colors.brightLavender,
            }}
          >
            <TouchableOpacity
              style={{
                height: parentDimensions.height,
                width: parentDimensions.width,
              }}
              onPress={() => {
                console.log(positionIndex, scrollPercentage);
              }}
            />
          </View>
          <View
            style={{
              width: parentDimensions.width,
              height: parentDimensions.height,
              backgroundColor: Colors.canaryYellow,
            }}
          />
          <View
            style={{
              width: parentDimensions.width,
              height: parentDimensions.height,
              backgroundColor: Colors.darkLavender,
            }}
          />
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
    height: 50,
    backgroundColor: Colors.white,
    paddingHorizontal: 5,
    paddingVertical: 5,
  },

});
