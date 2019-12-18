import React from "react";
import { StyleSheet, Text, View } from "react-native";

const GameStart: React.FC<{}> = () => {
  return (
    <View style={styles.screen}>
      <Text>Game Start Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    padding: 10
  }
});

export default GameStart;
