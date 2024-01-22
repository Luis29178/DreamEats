import { ImageBackground, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Fonts } from "@/constants/Fonts";

type propTypes = {
  style: {};
};

const MyStats = ({ style }: propTypes) => {
  const currentYear = new Date().getFullYear();

  ///temp data
  const currpoints = 400;
  const nextTierPointsNeeded = 1000;

  return (
    <ImageBackground
      source={require("@/assets/images/DreamCityLogo-bg-pattern.png")} // Replace with your image path
      resizeMode="cover"
    >
      <View style={[style, styles.container]}>
        <View style={styles.rewardsStats}>
          <View style={styles.rewardTierContainer}>
            <View style={styles.rewardTier}>
              <MaterialCommunityIcons
                name="star"
                size={50}
                color={Colors.primary}
              />
            </View>
          </View>

          <View style={styles.memberStatusContainer}>
            <Text style={styles.memberTitle}> Dream Eats </Text>
            <Text style={styles.memberType}> Member </Text>
            <Text style={styles.memberVaild}>
              {" "}
              {`Valid untill 12/31/${currentYear}`}{" "}
            </Text>
          </View>

          <View style={styles.progressContainer}>
            <Text style={styles.progressTitle}> To become a VIP Member </Text>
            <Text style={styles.progressText}>{`Earn ${
              nextTierPointsNeeded - currpoints
            } more points`}</Text>

            <View style={styles.progressBarContainer}>
              <View style={styles.progressBar}>
                {(currpoints / nextTierPointsNeeded) * 100 < 27.5 ? (
                  <Text
                    style={[
                      styles.progressBarTextExt,
                      (currpoints / nextTierPointsNeeded) * 100 < 13
                        ? { color: Colors.deepGray }
                        : { color: Colors.paleAqua },
                    ]}
                  >{`${currpoints} pts`}</Text>
                ) : (
                  <></>
                )}
                <View
                  style={[
                    styles.progressFill,
                    ,
                    { width: `${(currpoints / nextTierPointsNeeded) * 100}%` },
                  ]}
                >
                  {(currpoints / nextTierPointsNeeded) * 100 > 27.5 ? (
                    <Text
                      style={[styles.progressBarText]}
                    >{`${currpoints} pts`}</Text>
                  ) : (
                    <></>
                  )}
                </View>
              </View>
              <View style={styles.neededPointsContainer}>
                <Text
                  style={styles.NeededPointsText}
                >{`${nextTierPointsNeeded} pts`}</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

export default MyStats;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff88",
    paddingHorizontal: 20,
    alignContent: "center",
    justifyContent: "center",
  },
  rewardTier: {
    height: 100,
    width: 100,
    justifyContent: "center",
    alignItems: "center",
    borderColor: Colors.white,
    borderWidth: 15,
    borderRadius: 9001,
    backgroundColor: Colors.nearlyWhite,
  },
  rewardTierContainer: {
    height: 100,
    width: "100%",
    position: "absolute",
    top: -50,
    alignItems: "center",
    justifyContent: "center",
  },
  rewardsStats: {
    height: 275,
    width: "100%",
    backgroundColor: Colors.white,
    borderRadius: 25,
  },
  memberType: {
    fontSize: 32,
    fontFamily: Fonts.title,
    color: Colors.primary,
    textAlign: "center",
  },
  memberTitle: {
    fontSize: 16,
    fontFamily: Fonts.subBody,
    color: Colors.primary,
    textAlign: "center",
  },
  memberVaild: {
    fontSize: 12,
    fontFamily: Fonts.title,
    color: Colors.primary,
    textAlign: "center",
  },
  memberStatusContainer: {
    width: "100%",
    height: 80,
    marginTop: 50,
    gap: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  progressContainer: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: Colors.nearlyWhite,
    borderBottomRightRadius: 25,
    borderBottomLeftRadius: 25,
  },
  progressTitle: {
    fontSize: 16,
    fontFamily: Fonts.body,
    fontWeight: "bold",
    color: Colors.primary,
    textAlign: "center",
  },
  progressText: {
    fontSize: 14,
    fontFamily: Fonts.body,
    color: Colors.primary,
    textAlign: "center",
  },
  progressBarContainer: {
    marginTop: 20,
    height: 60,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  progressBar: {
    backgroundColor: Colors.lightGrey,
    height: 30,
    width: "80%",
    borderRadius: 9001,
    overflow: "hidden",
  },
  progressFill: {
    height: 30,
    borderRadius: 9001,
    backgroundColor: Colors.primary,
    alignItems: "flex-end",
    justifyContent: "center",
  },
  progressBarText: {
    paddingRight: 10,
    color: Colors.paleAqua,
  },
  progressBarTextExt: {
    zIndex: 10,
    position: "absolute",
    top: 7.75,
    left: 10,
    color: Colors.deepGray,
  },
  neededPointsContainer: {
    marginTop: 5,
    alignItems: "flex-end",
    width: "85%",
  },
  NeededPointsText: {
    fontSize: 14,
    fontFamily: Fonts.title,
    color: Colors.primary,
    textAlign: "center",
  },
});
