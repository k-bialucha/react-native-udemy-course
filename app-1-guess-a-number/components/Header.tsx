import React from "react";
import { Platform, StyleSheet, Text, View } from "react-native";

import AppTheme from "../AppTheme";

interface Props {
  title: string;
}

const Header: React.FC<Props> = ({ title }) => {
  return (
    <View
      style={{
        ...styles.container,
        ...Platform.select({
          ios: styles.containerIos,
          android: styles.containerAndroid
        })
      }}
    >
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
    borderBottomWidth: 2
  },
  containerIos: {
    backgroundColor: "white",
    borderBottomColor: AppTheme.accent
  },
  containerAndroid: {
    backgroundColor: AppTheme.primary,
    borderBottomColor: "transparent"
  },
  title: {
    color: Platform.OS === "ios" ? AppTheme.primary : "white",
    fontSize: 32
  }
});

export default Header;
