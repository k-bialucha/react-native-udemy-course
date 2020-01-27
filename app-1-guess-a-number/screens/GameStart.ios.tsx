import React, { useState, useEffect } from "react";
import { Alert, Dimensions, Keyboard, ScrollView, Text } from "react-native";

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
  const [buttonWidth, setButtonWidth] = useState(
    Dimensions.get("screen").width * 0.2
  );

  const updateButtonWidth = () => {
    setButtonWidth(Dimensions.get("screen").width * 0.2);
  };

  useEffect(() => {
    Dimensions.addEventListener("change", updateButtonWidth);
    return () => {
      Dimensions.removeEventListener("change", updateButtonWidth);
    };
  }, []);

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
      <Text>TODO: implement this SCREEN</Text>
    </ScrollView>
  );
};

export default GameStart;
