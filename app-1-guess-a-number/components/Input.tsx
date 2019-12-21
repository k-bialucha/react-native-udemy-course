import React from "react";
import { StyleSheet, TextInput, TextStyle, TextInputProps } from "react-native";
import AppTheme from "../AppTheme";

interface Props extends TextInputProps {
  style?: TextStyle;
  value: string;
}

const Input: React.FC<Props> = ({ value, style, ...restTextInputProps }) => {
  return (
    <TextInput
      {...restTextInputProps}
      value={value}
      style={{ ...styles.input, ...style }}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    height: 30,
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderBottomColor: AppTheme.primary,
    borderBottomWidth: 2,
    textAlign: "center"
  }
});

export default Input;
