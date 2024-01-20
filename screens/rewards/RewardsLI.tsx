import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import ScrollingCatagorySelector from "@/components/ScrollingCatagorySelector";
import { Colors } from "@/constants/Colors";


const pages = ["News", "Redeem Points", "My Status", "Gifts & Coupons"];

const RewardsLI = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);






  return (
    <View style={styles.container}>
      <ScrollingCatagorySelector
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
              {selectedIndex === index ? (
                <View
                  style={[{
                    width: '100%',
                    height: 3,
                    backgroundColor: Colors.primary,
                    position: "absolute",
                    bottom: 3,
                    borderRadius: 9001,
                  }]}
                />
              ) : (
                <></>
              )}
            </View>
          );
        })}
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
