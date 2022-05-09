import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";
import { colors } from "../GlobalStyles/Colors";

const MyButton = ({ onPress, children }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{children}</Text>
    </TouchableOpacity>
  );
};

export default MyButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.terciary,
    paddingHorizontal: 8,
    paddingVertical: 5,
    margin: 5,
    borderRadius: 10,
    borderLeftWidth: 5,
    borderBottomWidth: 5,
    borderRightWidth: 1,
    borderTopWidth: 1,
    borderColor: colors.blue,
    width: "auto",
    alignItems: "center",
  },
  text: {
    color: colors.white,
    fontSize: 20,
  },
});
