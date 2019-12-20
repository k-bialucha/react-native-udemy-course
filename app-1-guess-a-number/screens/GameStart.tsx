import React from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

const GameStart: React.FC<{}> = () => {
  return (
    <View style={styles.screen}>
      <Text>Start a New Game</Text>
      <View style={styles.card}>
        <Text style={styles.title}>Select a Number</Text>
        <TextInput />
        <View style={styles.buttonContainer}>
          <Button title="Reset" onPress={() => {}} />
          <Button title="Confirm" onPress={() => {}} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    padding: 10
  },
  title: {
    fontSize: 30,
    marginVertical: 10,
    color: "dodgerblue",
    fontWeight: "600"
  },
  card: {
    width: 300,
    maxWidth: "80%",
    alignItems: "center",
    shadowColor: "black",
    paddingVertical: 15,
    paddingHorizontal: 30,
    backgroundColor: "white",
    borderRadius: 10,
    marginTop: 20,
    // iOS shadow
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.26,
    // Android elevation
    elevation: 10
  },
  buttonContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 30
  }
});

export default GameStart;
