import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";

import AppText from "./AppText";

import AppTheme from "../AppTheme";

interface Props {
  onPress: (...args: any[]) => any;
}

const MainButton: React.FC<Props> = ({ children, onPress }) => {
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
      <View style={styles.button}>
        <AppText style={styles.buttonText}>{children}</AppText>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 7,
    backgroundColor: AppTheme.primary
  },
  buttonText: {
    color: "white",
    fontSize: 20,
    textAlign: "center"
  }
});

export default MainButton;