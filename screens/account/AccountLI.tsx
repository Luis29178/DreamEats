import { StyleSheet, Text, View, Image } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Fonts } from "@/constants/Fonts";
import { Colors } from "@/constants/Colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AccountOptionTouchable from "@/components/AccountOptionTouchable";
import { Link } from "expo-router";

const AccountLI = () => {
  const [hasPFP, setHasPFp] = useState(true);
  return (
    <View style={{}}>
      <Text style={styles.accountTabTitle}>Account</Text>
      <View style={styles.titleSpacer} />
      <View style={styles.accountImageContainer}>
        {hasPFP ? (
          <View style={styles.accountPFP}>
            <Image
              style={styles.accountPFPImg}
              source={require("@/assets/images/tempPFP.png")}
            ></Image>
          </View>
        ) : (
          <View style={styles.accountPFP}>
            <MaterialCommunityIcons
              name="account"
              size={70}
              color={Colors.nearlyWhite}
            />
          </View>
        )}
      </View>
      <View style={styles.accountInfoContainer}>
        <Text style={styles.accountName}>{`${"Default"}`}</Text>
        <Text style={styles.accountEmail}>{`${"Default@gmail.com"}`}</Text>
      </View>
      <View style={styles.accountOptions}>
        
          <AccountOptionTouchable link="" OptionText={"Edit Profile"} />
      
          <AccountOptionTouchable link="" OptionText={"Payment Methods"} />

          <AccountOptionTouchable link="" OptionText={"Saved Adresses"} />

          <AccountOptionTouchable link="" OptionText={"Edit Profile"} />

          <AccountOptionTouchable link="" OptionText={"Sign Out"} />

      </View>
    </View>
  );
};

export default AccountLI;

const styles = StyleSheet.create({
  accountInfoContainer: {
    marginTop: 16,
    alignItems: "center",
  },
  accountName: {
    fontSize: 24,
    fontFamily: Fonts.title,
    color: Colors.primary,
    textAlign: "center",
  },
  accountEmail: {
    fontSize: 18,
    fontFamily: Fonts.body,
    color: Colors.primary,
    textAlign: "center",
  },
  accountOptions: {
    flex: 1,
  },
  accountPFP: {
    height: 80,
    width: 80,
    borderRadius: 9001,
    backgroundColor: Colors.royalBlue,
    justifyContent: "center",
    alignItems: "center",
  },
  accountPFPImg: {
    height: 60,
    width: 60,
    resizeMode: "contain",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  accountTabTitle: {
    fontSize: 20,
    fontFamily: Fonts.title,
    fontWeight: "900",
    color: Colors.darkBlue,
    textAlign: "center",
    paddingTop: 60,
    backgroundColor: Colors.lighterGray,
  },
  titleSpacer: {
    width: "100%",
    height: 60,
    backgroundColor: Colors.lighterGray,
  },
  accountImageContainer: {
    width: "100%",
    height: 80,
    marginTop: -40,
    justifyContent: "center",
    alignItems: "center",
  },
});
