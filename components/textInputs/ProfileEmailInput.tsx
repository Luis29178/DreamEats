import { StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useState } from 'react';
import { Fonts } from '@/constants/Fonts';
import { Colors } from '@/constants/Colors';

type propTypes = {
  title?: string;
  defaultPhoneNumber?: string;
};

const ProfileEmailInput = ({
    title,
    defaultPhoneNumber,
  }: propTypes) => {
    const [phoneNumber, setPhoneNumber] = useState(defaultPhoneNumber ? defaultPhoneNumber : '');
  
    // Function to handle phone number input
    const handlePhoneNumberChange = (inputPhoneNumber: string) => {
      setPhoneNumber(inputPhoneNumber);
      // Add any specific validation for phone number format here if needed
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
            placeholder="Phone Number" // Guide users on what to enter
            keyboardType="phone-pad" // Optimal keyboard for phone number input
            placeholderTextColor={Colors.grey}
          />
        </View>
      </View>
    );
  };

export default ProfileEmailInput

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
      fontWeight: '400',
    },
    titleContainer: {
      marginBottom: 6,
    },
    titleText: {
      fontSize: 12,
      color: Colors.grey,
    },
  });