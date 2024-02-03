import { Keyboard, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import { Fonts } from "@/constants/Fonts";
import { Colors } from "@/constants/Colors";

type propTypes = {
  title?: string;
  defaultDate?: string;
  showCounter?: boolean; // Likely not needed for date input, but kept for consistency
};

const ProfileDateInput = ({
  title,
  defaultDate,
  showCounter = false, // Default to false as it's less relevant for date input
}: propTypes) => {
  const [date, setDate] = useState(defaultDate ? defaultDate : undefined);

  // Function to handle date input and potentially validate format
  const handleDateChange = (inputDate: string) => {
    let numbers = inputDate.replace(/[^\d]/g, "");

    if (numbers.length >= 2) {
      const month = parseInt(numbers.substring(0, 2), 10);
      if (month < 1 || month > 12) {
        numbers = "12" + numbers.substring(2);
      }
    }

    if (numbers.length > 2) {
      numbers = `${numbers.slice(0, 2)}-${numbers.slice(2)}`;
    }

    // Ensure the day (DD) part is valid
    if (numbers.length > 5) {
      const day = parseInt(numbers.substring(3, 5), 10);
      if (day < 1 || day > 31) {
        numbers = numbers.substring(0, 3) + "31";
      }
    }

    if (numbers.length > 5) {
      numbers = numbers.substring(0, 5);
    }

    setDate(numbers);

    if (numbers.length === 5) {
        Keyboard.dismiss();
      }
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
          maxLength={5}
          placeholderTextColor={Colors.grey}
        />
      </View>
    </View>
  );
};

export default ProfileDateInput;

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
