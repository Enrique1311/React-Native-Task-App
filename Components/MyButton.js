import { StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { colors } from "../GlobalStyles/Colors";

const MyButton = ({ onPress, children }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      {children}
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
    width: "auto",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: colors.white,
    fontSize: 20,
  },
});
