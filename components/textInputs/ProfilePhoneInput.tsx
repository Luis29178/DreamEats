import { Keyboard, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import { Fonts } from "@/constants/Fonts";
import { Colors } from "@/constants/Colors";

type propTypes = {
  title?: string;
  defaultPhoneNumber?: string;
};

const ProfilePhoneInput = ({ title, defaultPhoneNumber }: propTypes) => {
  const [phoneNumber, setPhoneNumber] = useState(
    defaultPhoneNumber ? defaultPhoneNumber : ""
  );

  const handlePhoneNumberChange = (inputPhoneNumber: string) => {
    let numbers = inputPhoneNumber.replace(/[^\d]/g, "");


    if (numbers.length > 3 && numbers.length <= 6) {
      numbers = `${numbers.slice(0, 3)}-${numbers.slice(3)}`;
    } else if (numbers.length > 6) {
      numbers = `${numbers.slice(0, 3)}-${numbers.slice(3, 6)}-${numbers.slice(
        6
      )}`;
    }


    setPhoneNumber(numbers);

    if (numbers.length === 12) {
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
          value={phoneNumber}
          onChangeText={handlePhoneNumberChange}
          placeholder="000-000-0000" // Guide users on what to enter
          keyboardType="phone-pad" // Optimal keyboard for phone number input
          maxLength={12}
          placeholderTextColor={Colors.grey}
        />
      </View>
    </View>
  );
};

export default ProfilePhoneInput;

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
  titleContainer: {
    marginBottom: 6,
  },
  titleText: {
    fontSize: 12,
    color: Colors.grey,
  },
});
