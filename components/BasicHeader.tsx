import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "expo-router";

type propTypes = {
  title: string;
};

const BasicHeader = ({ title }: propTypes) => {
  const navigation = useNavigation();
  return (
    <View style={styles.headerContainer}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.headerBackBtn}
        >
          <MaterialCommunityIcons
            name="chevron-left"
            size={30}
            color={Colors.primary}
          />
        </TouchableOpacity>
        <View style={styles.headerTextContainer}>
          <Text style={styles.headerText}>{`${title}`}</Text>
        </View>
      </View>
    </View>
  );
};

export default BasicHeader;

const styles = StyleSheet.create({
  headerContainer: {
    height: 100,
    justifyContent: "flex-end",
    backgroundColor: Colors.lighterGrey,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.15,
    shadowRadius: 2,

    elevation: 1,
  },
  header: {
    flexDirection: "row",
    width: "100%",
    height: 50,
    alignItems: "center",
  },
  headerText: {
    color: Colors.primary,
    fontSize: 20,
  },
  headerBackBtn: {
    height: 50,
    width: 50,
    justifyContent: "center",
  },
  headerTextContainer: {
    flex: 1,
  },
});
