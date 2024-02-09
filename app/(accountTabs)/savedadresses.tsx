import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";
import { useNavigation } from "expo-router";
import { Fonts } from "@/constants/Fonts";
import { StatusBar } from "expo-status-bar";
import BasicHeader from "@/components/BasicHeader";

const savedadresses = () => {
  return (
    <View style={styles.container}>
      <BasicHeader title="Saved Adresses" />

      <View style={styles.contentContainer}>
        

      </View>
      <StatusBar style="dark" />
    </View>
  );
};

export default savedadresses;

const styles = StyleSheet.create({
  container:{
    flex:1,
  },
  contentContainer:{
    flex:1,
  },
});
