import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import React, { useState } from "react";
import { Colors } from "@/constants/Colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Fonts } from "@/constants/Fonts";
import { Link } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import data from "@/constants/TempData/rewardsTemp.json";
import RewardsItemCard from "@/components/RewardsItemCard";

type propTypes = {
  style: { width: number; height: number };
};

const pointCategories = [
  "200-400 Points",
  "500-800 Points",
  "900-1200 Points",
  "1300-1600 Points",
  "1700+ Points",
];

const RedeemPoints = ({ style }: propTypes) => {
  const [isVIP, setIsVIP] = useState(false);
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <ImageBackground
        style={{ overflow: "hidden" }}
        source={require("@/assets/images/DreamCityLogo-bg-pattern.png")} // Replace with your image path
        resizeMode="cover"
        imageStyle={{ left: -4 }}
      >
        <View
          style={[
            style,
            {
              alignItems: "center",
              paddingTop: 25,
              paddingHorizontal: 25,
              backgroundColor: "#ffffff88",
            },
          ]}
        >
          <View style={styles.internalCard}>
            <Text style={styles.intCardTitle}> Dream Eats</Text>
            <Text style={styles.intMemberStat}> Member </Text>
            <MaterialCommunityIcons
              style={{ marginTop: -25 }}
              name="food-croissant"
              size={150}
              color={Colors.primary}
            ></MaterialCommunityIcons>
            <Text style={styles.intEarnText}>Start earning points</Text>
            <Text style={styles.intEarnSubText}>
              Earn 10 points for every dollar you spend, and redeem rewards
            </Text>

            <Link href={"./"} asChild>
              <TouchableOpacity style={styles.menuButton}>
                <Text style={styles.btnText}>View Menu</Text>
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

      <View style={[styles.rewardsList, { width: style.width }]}>
        <View>
          <Text style={styles.rewardCategoryTitle}>200 - 400 Points</Text>
          <View style={[styles.gridContainer, { width: style.width }]}>
            {data.rewards.generalRewards["200-400 Points"].map(
              (reward, index) => (
                <RewardsItemCard key={index} reward={reward} />
              )
            )}
          </View>
          <Text style={styles.rewardCategoryTitle}>500 - 800 Points</Text>
          <View style={[styles.gridContainer, { width: style.width }]}>
            {data.rewards.generalRewards["500-800 Points"].map(
              (reward, index) => (
                <RewardsItemCard key={index} reward={reward} />
              )
            )}
          </View>

          <Text style={styles.rewardCategoryTitle}>900 - 1200 Points</Text>
          <View style={[styles.gridContainer, { width: style.width }]}>
            {data.rewards.generalRewards["900-1200 Points"].map(
              (reward, index) => (
                <RewardsItemCard key={index} reward={reward} />
              )
            )}
          </View>

          <Text style={styles.rewardCategoryTitle}>1300 - 1600 Points</Text>
          <View style={[styles.gridContainer, { width: style.width }]}>
            {data.rewards.generalRewards["1300-1600 Points"].map(
              (reward, index) => (
                <RewardsItemCard key={index} reward={reward} />
              )
            )}
          </View>

          <Text style={styles.rewardCategoryTitle}>1700+ Points</Text>
          <View style={[styles.gridContainer, { width: style.width }]}>
            {data.rewards.generalRewards["1700+ Points"].map(
              (reward, index) => (
                <RewardsItemCard key={index} reward={reward} />
              )
            )}
          </View>
        </View>

        <View style={isVIP ? {} : { opacity: 0.5, pointerEvents: "none" }}>
          <Text style={styles.rewardCategoryTitleVIP}>Vip Members Rewards</Text>
          <View style={[styles.gridContainer, { width: style.width }]}>
            {data.rewards.vipTier.items.map((reward, index) => (
              <RewardsItemCard key={index} reward={reward} />
            ))}
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default RedeemPoints;

const styles = StyleSheet.create({
  gridContainer: {
    flexDirection: "row", // Arranges children in a row
    flexWrap: "wrap", // Allows items to wrap to the next line
    gap: 10,
  },
  rewardCategoryTitle: {
    marginTop: 15,
    fontSize: 26,
    fontFamily: Fonts.subBody,
    color: Colors.primary,
    marginBottom: 10,
  },
  rewardCategoryTitleVIP: {
    marginTop: 15,
    fontSize: 26,
    fontFamily: Fonts.subBody,
    color: "#ff4444",
    marginBottom: 10,
  },

  container: {
    backgroundColor: "#ffffff88",
  },
  internalCard: {
    height: 300,
    width: "100%",
    borderRadius: 15,
    backgroundColor: Colors.white,
    paddingTop: 15,
    paddingBottom: 25,
    paddingVertical: 25,
    alignItems: "center",
  },
  rewardsList: {
    paddingLeft: 15,
    minHeight: 300,
    backgroundColor: Colors.white,
    marginTop: -275,
  },
  intCardTitle: {
    fontSize: 16,
    fontFamily: Fonts.subBody,
    color: Colors.primary,
    textAlign: "center",
  },
  intMemberStat: {
    marginTop: 15,
    fontSize: 30,
    fontFamily: Fonts.title,
    color: Colors.primary,
    textAlign: "center",
  },
  intEarnText: {
    marginTop: -15,
    fontSize: 20,
    fontFamily: Fonts.title,
    color: Colors.primary,
    textAlign: "center",
  },
  intEarnSubText: {
    marginTop: 5,
    fontSize: 14,
    fontFamily: Fonts.body,
    fontWeight: "500",
    color: Colors.primary,
    textAlign: "center",
  },
  menuButton: {
    marginTop: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 5,
    // Add these properties for Android elevation
    elevation: 2,
    paddingHorizontal: 10,
    paddingVertical: 5,
    flexDirection: "row",
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
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    borderRadius: 9001,
  },
});
