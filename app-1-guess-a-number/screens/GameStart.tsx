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

import AppText from "../components/AppText";
import AppTitle from "../components/AppTitle";
import Card from "../components/Card";
import Input from "../components/Input";
import MainButton from "../components/MainButton";
import NumberContainer from "../components/NumberContainer";

import AppTheme from "../AppTheme";

interface Props {
  onGameStart: (userChoice: number) => void;
}

const GameStart: React.FC<Props> = ({ onGameStart }) => {
  const randomInitialNumber: number = Math.floor(Math.random() * 100 + 1);

  const [inputValue, setInputValue] = useState<string>(
    `${randomInitialNumber}`
  );
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

    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.screen}>
        <AppText>Start a New Game</AppText>
        <Card style={styles.card}>
          <AppTitle style={styles.title}>Select a Number</AppTitle>
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
          <Card style={styles.summaryContainer}>
            <Text style={styles.title}>Chosen number:</Text>
            <NumberContainer number={number}></NumberContainer>
            <View style={styles.startGameButtonContainer}>
              <MainButton
                onPress={() => {
                  onGameStart(number);
                }}
              >
                start game
              </MainButton>
            </View>
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
    marginVertical: 10
  },
  card: {
    width: 300,
    maxWidth: "80%",
    alignItems: "center"
  },
  input: {
    width: 120,
    maxWidth: "80%",
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
  },
  summaryContainer: {
    marginVertical: 20,
    alignItems: "center"
  },
  startGameButtonContainer: {
    marginVertical: 10
  }
});

export default GameStart;
