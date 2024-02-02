import { StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import { Fonts } from "@/constants/Fonts";
import { Colors } from "@/constants/Colors";
type propTypes = {
  title?: string;
  defaultText: string;
  maxLength?: number;
  showCounter: boolean;
};
const ProfileTextInput = ({
  title,
  defaultText,
  maxLength,
  showCounter,
}: propTypes) => {
  const [inputText, setInputText] = useState(defaultText);

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        {title ? (
          <View style={styles.titleContainer}>
            <Text style={styles.titleText}>{title}</Text>
          </View>
        ) : (
          <></>
        )}

        <TextInput
          style={styles.textInput}
          defaultValue={defaultText}
          onChangeText={(text) => setInputText(text)}
          maxLength={maxLength}
        />
      </View>

      {showCounter ? (
        <Text style={styles.charCount}>
          {maxLength !== undefined
            ? `${inputText.length}${"/" + maxLength}`
            : inputText.length}
        </Text>
      ) : (
        <></>
      )}
    </View>
  );
};

export default ProfileTextInput;

const styles = StyleSheet.create({
  container: {
    
  },
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
