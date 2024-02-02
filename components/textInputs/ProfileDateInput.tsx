import { StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import { Fonts } from "@/constants/Fonts";
import { Colors } from "@/constants/Colors";

type propTypes = {
  title?: string;
  defaultDate?: string;
  showCounter?: boolean; // Likely not needed for date input, but kept for consistency
};

const ProfileDateInput =({
    title,
    defaultDate,
    showCounter = false, // Default to false as it's less relevant for date input
  }: propTypes) => {
    const [date, setDate] = useState(defaultDate ? defaultDate : undefined);
  
    // Function to handle date input and potentially validate format
    const handleDateChange = (inputDate: string) => {
      setDate(inputDate);
      // Here you can add validation for the date format if needed
    };
  
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          {title && (
            <View style={styles.titleContainer}>
              <Text style={styles.titleText}>{title}</Text>
            </View>
          )}
  
          <TextInput
            style={styles.textInput}
            value={date}
            onChangeText={handleDateChange}
            placeholder="MM-DD" // Guide users on the expected format
            keyboardType="numeric" // Helps bring up a numeric keypad on mobile devices
            placeholderTextColor={Colors.grey}
          />
        </View>

      </View>
    );
  };

export default ProfileDateInput

const styles = StyleSheet.create({
    container: {},
    inputContainer: {
      padding: 12,
      borderWidth: 1,
      borderColor: Colors.darkGrey,
      borderRadius: 6,
    },
    textInput: {
      fontSize: 18,
      fontFamily: Fonts.body,
      fontWeight: "400",
    },
    charCount: {
      textAlign: "right",
      color: "gray",
    },
    titleContainer: {
      marginBottom: 6,
    },
    titleText: {
      fontSize: 12,
      color: Colors.grey,
    },
  });