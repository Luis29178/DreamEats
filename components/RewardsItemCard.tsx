import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";
type propTypes = {
  reward: {
    name: string;
    pointCost: number;
    img: string;
  };
};
const RewardsItemCard = ({ reward }: propTypes) => {
  return (
    <View style={styles.rewardContainer}>
      <Image
        source={require("@/assets/images/tempRewardImg.png")}
        style={styles.rewardImage}
      />
      <Text style={styles.rewardText}>{reward.name}</Text>
      <Text style={styles.rewardText}>{reward.pointCost} Points</Text>
    </View>
  );
};

export default RewardsItemCard;

const styles = StyleSheet.create({
  rewardContainer: {
    height: 140,
    width: 115,
    backgroundColor: Colors.nearlyWhite,
    padding: 5,
    borderRadius: 10,
  },
  rewardText: {
    marginTop: 5,
    textAlign: 'center',
  },
  rewardImage: {
    width: "100%",
    flex: 1,
    resizeMode: "contain",
  },
});
