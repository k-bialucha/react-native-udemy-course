import React from "react";
import { Text, TextStyle, StyleSheet } from "react-native";

interface Props {
  style?: TextStyle;
  children: string;
}

const AppText: React.FC<Props> = ({ style, children }) => {
  return (
    <Text style={{ ...styles.appText, ...(style ?? {}) }}>{children}</Text>
  );
};

const styles = StyleSheet.create({
  appText: {
    fontFamily: "poppins"
  }
});

export default AppText;
