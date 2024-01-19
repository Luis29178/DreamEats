import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { Colors } from "@/constants/Colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Fonts } from "@/constants/Fonts";

const order = () => {
  const [hasOrder, setHasOrder] = useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.segmentTop}>
        <View style={styles.iconContainer}>
          <MaterialCommunityIcons
            name="food-steak"
            color={Colors.primary}
            size={300}
          />
        </View>
      </View>

      <View style={styles.segmentBottom}>
        <View style={styles.internalBottom}>
        <Text style={styles.textBig}>{`You haven't started an order yet`}</Text>
        <Text style={styles.textSeperator}>{`···`}</Text>
        <Text style={styles.textInstruct}>{`TAP MENU TO BEGIN ORDER`}</Text>
        </View>
      </View>
    </View>
  );
};

export default order;

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

  container: {
    flex: 1,
    backgroundColor: "white",
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
    backgroundColor: 'white',
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2},
    shadowOpacity: .35,
    shadowRadius: 4,
    elevation: 4, // Elevation for Android (adds shadow to all sides)
  },
  internalBottom: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
