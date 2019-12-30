import React from "react";
import { StyleSheet, Text, View } from "react-native";

import AppTheme from "../AppTheme";

interface Props {
  number: number;
}

const NumberContainer: React.FC<Props> = ({ number }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.number}>{number}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: AppTheme.accent,
    paddingVertical: 7,
    paddingHorizontal: 30,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 5
  },
  number: {
    color: AppTheme.accent,
    fontSize: 32,
    fontWeight: "600",
    textAlign: "center"
  }
});

export default NumberContainer;
