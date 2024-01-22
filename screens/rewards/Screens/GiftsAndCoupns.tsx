import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { MaterialIcons } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";
import { Fonts } from "@/constants/Fonts";

type propTypes = {
  style: {};
};

const GiftsAndCoupons = ({ style }: propTypes) => {
  return (
    <View style={style}>
      <StatusBar style="dark" />
      <View style={styles.segmentTop}>
        <View style={styles.iconContainer}>
          <MaterialIcons
            name="card-giftcard"
            color={Colors.primary}
            size={300}
          />
        </View>
      </View>

      <View style={styles.segmentBottom}>
        <View style={styles.internalBottom}>
          <Text
            style={styles.textBig}
          >{`You dont have any gifts`}</Text>
          <Text style={styles.textSeperator}>{`···`}</Text>
          <Text style={styles.textInstruct}>{`COME BACK LATER TO CHECK FOR GIFTS`}</Text>
        </View>
      </View>
    </View>
  );
};

export default GiftsAndCoupons;

const styles = StyleSheet.create({
  textBig: {
    fontSize: 36,
    fontFamily: Fonts.title,
    color: Colors.heavyGray,
    textAlign: "center",
  },
  textSeperator: {
    fontSize: 32,
    fontFamily: Fonts.title,
    color: Colors.heavyGray,
  },
  textInstruct: {
    fontSize: 16,
    fontFamily: Fonts.title,
    color: Colors.heavyGray,
  },
  iconContainer: {
    position: "absolute",
    top: 100,
    bottom: 0,
    left: 0,
    right: 0,
    alignItems: "center",
    justifyContent: "center",
  },
  segmentTop: {
    flex: 8,
    backgroundColor: Colors.lightLilac,
  },
  segmentBottom: {
    flex: 2,
    backgroundColor: Colors.white,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.35,
    shadowRadius: 4,
    elevation: 4, // Elevation for Android (adds shadow to all sides)
  },
  internalBottom: {
    paddingHorizontal: 20,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
