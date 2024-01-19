import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";
import { Fonts } from "@/constants/Fonts";
import { Link } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";

const rewards = () => {
  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <View style={styles.titleCard}>
        <Text style={styles.titleCardText}>
          {"Become a Member and Earn Rewards"}
        </Text>
        <Image
          style={styles.titleCardImg}
          source={require("../../assets/images/rewardsbg-lo.png")}
        />
      </View>

      <View style={styles.subInfoCard}>
        <Text style={styles.subInfoCardText}>{'Earn points to redeem available rewards, and stay updated with the latest news and special events.'}</Text>
      </View>

      <View style={styles.btnContainer}>
        <Link href={"./"} asChild>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.btnText}>Join DreamEats</Text>
            <LinearGradient
              colors={["transparent", "rgba(255,255,255,0.125)"]}
              start={{ x: 0.5, y: 0.5 }}
              end={{ x: 0.5, y: 1 }}
              style={styles.innerShadow}
            />
          </TouchableOpacity>
        </Link>
      </View>
    </View>
  );
};

export default rewards;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },

  subInfoCard: {
    flex: 1,
    backgroundColor: Colors.white,
    
    
    paddingTop: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.35,
    shadowRadius: 4,
    elevation: 2, // Elevation for Android (adds shadow to all sides)
  },
  subInfoCardText: {
    paddingHorizontal:8,
    textAlign: "center",
    fontSize: 18,
    fontFamily: Fonts.title,
    color: Colors.heavyGray,
  },

  titleCard: {
    top: 15,
    width: "100%",
    height: 500,
    alignItems: "center",
    justifyContent: "center",
  },
  titleCardImg: {
    width: "100%",
    resizeMode: "contain",
  },
  titleCardText: {
    zIndex: 10,
    position: "absolute",
    top: 0,
    color: Colors.primary,
    fontFamily: Fonts.button,
    fontSize: 36,
    textAlign: "center",
  },
  btnContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    paddingHorizontal: 15,
    paddingBottom: 20,
  },
  button: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.35,
    shadowRadius: 10,
    // Add these properties for Android elevation
    elevation: 4,

    flexDirection: "row",
    width: "100%",
    height: 50,
    backgroundColor: Colors.primary,
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    borderRadius: 9001,
  },

  btnText: {
    color: Colors.paleAqua,
    fontFamily: Fonts.button,
    fontSize: 20,
  },
  innerShadow: {
    borderRadius: 9001,
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
});
