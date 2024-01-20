import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import React from "react";

import { Colors } from "@/constants/Colors";
import { Fonts } from "@/constants/Fonts";

import { Link } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";

const AccountLO = () => {
  return (
    <ImageBackground
      source={require("../../assets/images/accountbg.png")} // Replace with your image path
      resizeMode="cover" // or "contain", depending on what you need
      style={styles.backgroundImage}
    >
      <StatusBar style="dark" />
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Edit & Save Account Setting</Text>
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
    </ImageBackground>
  );
};

export default AccountLO;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleContainer: {
    position: "absolute",

    top: 20,
    left: 60,
    right: 60,
  },
  btnContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    paddingHorizontal: 15,
    paddingBottom: 20,
    gap: 15,
  },
  imgContainer: {
    position: "absolute",
    top: 0,
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: 10,
    borderColor: Colors.black,
    borderRadius: 10,
  },
  title: {
    top: 10,
    fontSize: 28,
    fontWeight: "bold",
    letterSpacing: 1,
    fontFamily: Fonts.title,
    color: Colors.primary,
    textAlign: "center",
  },
  backgroundImage: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  btnText: {
    color: Colors.paleAqua,
    fontFamily: Fonts.button,
    fontSize: 20,
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
  innerShadow: {
    borderRadius: 9001,
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
});
