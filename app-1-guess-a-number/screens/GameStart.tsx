import React from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

import Card from "../components/Card";
import Input from "../components/Input";

import AppTheme from "../AppTheme";

const GameStart: React.FC<{}> = () => {
  return (
    <View style={styles.screen}>
      <Text>Start a New Game</Text>
      <Card style={styles.card}>
        <Text style={styles.title}>Select a Number</Text>
        <Input
          value="99"
          style={styles.input}
          autoCorrect={false}
          keyboardType="number-pad"
          maxLength={2}
          blurOnSubmit
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Reset" onPress={() => {}} color={AppTheme.accent} />
          </View>
          <View style={styles.button}>
            <Button
              title="Confirm"
              onPress={() => {}}
              color={AppTheme.primary}
            />
          </View>
        </View>
      </Card>
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
    color: AppTheme.primary,
    fontWeight: "600"
  },
  card: {
    width: 300,
    maxWidth: "80%",
    alignItems: "center"
  },
  input: {
    width: "80%",
    maxWidth: 100,
    marginVertical: 10
  },
  buttonContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between"
  },
  button: {
    flexGrow: 1,
    width: "40%",
    marginHorizontal: 10
  }
});

export default GameStart;
