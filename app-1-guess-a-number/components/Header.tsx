import React from "react";
import { Platform, StyleSheet, Text, View } from "react-native";

import AppTheme from "../AppTheme";

interface Props {
  title: string;
}

const Header: React.FC<Props> = ({ title }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "flex-end",
    width: "100%",
    height: 80,
    paddingTop: 30,
    paddingBottom: 5,
    paddingHorizontal: 10,
    backgroundColor: Platform.OS === "ios" ? "white" : AppTheme.primary,
    borderBottomColor: Platform.OS === "ios" ? AppTheme.accent : "transparent",
    borderBottomWidth: 2
  },
  title: {
    color: Platform.OS === "ios" ? AppTheme.primary : "white",
    fontSize: 32
  }
});

export default Header;
