import React, { useState } from "react";
import {
  Alert,
  Button,
  Keyboard,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View
} from "react-native";

import Card from "../components/Card";
import Input from "../components/Input";

import AppTheme from "../AppTheme";

const GameStart: React.FC<{}> = () => {
  const [inputValue, setInputValue] = useState<string>("7");
  const [number, setNumber] = useState<number>(null);
  const [isConfirmed, setIsConfirmed] = useState<boolean>(false);

  const handleNumberChange = (inputValue: string) => {
    const inputSanitized: string = inputValue.replace(/[^0-9]/, "");
    setInputValue(inputSanitized);
  };

  const handleNumberReset = () => {
    setInputValue("");
    setIsConfirmed(false);
  };

  const handleConfirmation = () => {
    const numberParsed: number = parseInt(inputValue);

    const isNumberValid: boolean =
      !Number.isNaN(numberParsed) && numberParsed >= 1 && numberParsed <= 99;

    if (!isNumberValid) {
      setInputValue("");
      Alert.alert(
        "Input invalid",
        "You must provide a number between 1 and 99.",
        [{ text: "Got it!", style: "destructive" }]
      );
      return;
    }

    setNumber(numberParsed);
    setIsConfirmed(true);
    setInputValue("");
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.screen}>
        <Text>Start a New Game</Text>
        <Card style={styles.card}>
          <Text style={styles.title}>Select a Number</Text>
          <Input
            value={inputValue}
            onChangeText={handleNumberChange}
            style={styles.input}
            autoCorrect={false}
            keyboardType="number-pad"
            maxLength={2}
            blurOnSubmit
          />
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button
                title="Reset"
                onPress={handleNumberReset}
                color={AppTheme.accent}
              />
            </View>
            <View style={styles.button}>
              <Button
                title="Confirm"
                onPress={handleConfirmation}
                color={AppTheme.primary}
              />
            </View>
          </View>
        </Card>
        {isConfirmed && (
          <Card>
            <Text style={styles.title}>Chosen number: {number}</Text>
          </Card>
        )}
      </View>
    </TouchableWithoutFeedback>
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
