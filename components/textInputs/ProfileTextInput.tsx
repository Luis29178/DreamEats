import { StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
type propTypes = {
  title: string;
  defaultText: string;
  counter?: number;
  maxLength?: number;
  showCounter: boolean;
};
const ProfileTextInput = ({
  title,
  defaultText,
  counter,
  maxLength,
  showCounter,
}: propTypes) => {
  const [inputText, setInputText] = useState(defaultText);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        defaultValue={defaultText}
        onChangeText={(text) => setInputText(text)}
        maxLength={maxLength}
      />
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
    padding: 20,
  },
  textInput: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
  },
  charCount: {
    textAlign: "right",
    color: "gray",
  },
});
