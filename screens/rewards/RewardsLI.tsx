import {
  Animated,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import ScrollingCatagorySelector from "@/components/ScrollingCatagorySelector";
import { Colors } from "@/constants/Colors";
import News from "./Screens/News";
import MyStats from "./Screens/MySatus";
import GiftsAndCoupons from "./Screens/GiftsAndCoupns";
import RedeemPoints from "./Screens/RedeemPoints";

const pages = ["News", "Redeem Points", "My Status", "Gifts & Coupons"];

const RewardsLI = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [parentDimensions, setParentDimensions] = useState({
    width: 0,
    height: 0,
  });
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const animatedWidths = useRef(pages.map(() => new Animated.Value(0))).current;

  useEffect(() => {
    pages.forEach((_, index) => {
      Animated.timing(animatedWidths[index], {
        toValue: selectedIndex === index ? 100 : 0,
        duration: 300,
        useNativeDriver: false,
      }).start();
    });
  }, [selectedIndex]);

  return (
    <View style={styles.container}>
      <ScrollingCatagorySelector
        scrollPercentage={scrollPercentage}
        setScrollPercentage={setScrollPercentage}
        indexStateSelector={setSelectedIndex}
        selectedIndex={selectedIndex}
        categoryBar={pages.map((page, index) => {
          return (
            <View style={[styles.categoryItem]} key={page + index}>
              <TouchableOpacity
                onPress={() => {
                  setSelectedIndex(index);
                }}
              >
                <Text>{page}</Text>
              </TouchableOpacity>
              <Animated.View
                style={{
                  width: animatedWidths[index].interpolate({
                    inputRange: [0, 100],
                    outputRange: ["0%", "100%"],
                  }),
                  height: 3,
                  backgroundColor: Colors.primary,
                  position: "absolute",
                  bottom: 3,
                  borderRadius: 9001,
                }}
              />
            </View>
          );
        })}
        setParentDimensions={setParentDimensions}
        parentDimensions={parentDimensions}
        contentView={[
          <News
            style={{
              width: parentDimensions.width,
              height: parentDimensions.height,
            }}
            key={`Screen-${pages[1]}`}
          />,
          <RedeemPoints
            style={{
              width: parentDimensions.width,
              height: parentDimensions.height,
              backgroundColor: Colors.dustyRose,
            }}
            key={`Screen-${pages[2]}`}
          />,
          <MyStats
            style={{
              width: parentDimensions.width,
              height: parentDimensions.height,
              backgroundColor: Colors.canaryYellow,
            }}
            key={`Screen-${pages[3]}`}
          />,
          <GiftsAndCoupons
            style={{
              width: parentDimensions.width,
              height: parentDimensions.height,
              backgroundColor: Colors.darkLavender,
            }}
            key={`Screen-${pages[4]}`}
          />,
          
        ]}
      />
    </View>
  );
};

export default RewardsLI;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  categoryItem: {
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
    paddingHorizontal: 10,
  },
});
