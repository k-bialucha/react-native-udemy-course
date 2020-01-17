import React, { useState } from "react";
import {
  Alert,
  Button,
  Dimensions,
  Keyboard,
  KeyboardAvoidingView,
  ScrollView,
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
    <ScrollView>
      <KeyboardAvoidingView behavior="position" keyboardVerticalOffset={30}>
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
                <View
                  style={{
                    ...styles.button,
                    width: Dimensions.get("screen").width * 0.2
                  }}
                >
                  <Button
                    title="Reset"
                    onPress={handleNumberReset}
                    color={AppTheme.accent}
                  />
                </View>
                <View
                  style={{
                    ...styles.button,
                    width: Dimensions.get("screen").width * 0.2
                  }}
                >
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
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    padding: Dimensions.get("window").width > 400 ? 10 : 2
  },
  title: {
    marginVertical: Dimensions.get("window").height > 600 ? 10 : 3,
    fontSize: Math.floor(Dimensions.get("window").height / 22)
  },
  card: {
    minWidth: 240,
    width: "90%",
    maxWidth: Dimensions.get("screen").width > 600 ? 500 : 360,
    alignItems: "center",
    borderWidth: 5
  },
  input: {
    width: 120,
    maxWidth: "80%",
    marginVertical: 10
  },
  buttonContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-around"
  },
  button: {
    flexGrow: 1,
    width: Dimensions.get("screen").width * 0.2,
    maxWidth: Dimensions.get("screen").width > 600 ? 220 : 160,
    marginHorizontal: 5
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
