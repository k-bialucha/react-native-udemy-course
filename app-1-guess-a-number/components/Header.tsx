import React from "react";
import { Text, View, StyleSheet } from "react-native";

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
    width: "100%",
    height: 80,
    paddingTop: 30,
    paddingBottom: 5,
    paddingHorizontal: 10,

    backgroundColor: AppTheme.primary,
    justifyContent: "flex-end"
  },
  title: {
    color: "white",
    fontSize: 32
  }
});

export default Header;
