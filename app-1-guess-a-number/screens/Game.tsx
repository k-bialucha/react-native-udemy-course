import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import AppTheme from "../AppTheme";

interface Props {
  userChoice: number;
}

const generateRandomNumber = (
  min: number,
  max: number,
  excludedNumbers: number[]
) => {
  const minAdjusted: number = Math.ceil(min);
  const maxAdjusted: number = Math.floor(max);

  const amplitude: number = maxAdjusted - minAdjusted;

  const generatedNumber: number =
    Math.floor(Math.random() * amplitude) + minAdjusted;

  if (excludedNumbers.includes(generatedNumber))
    return generateRandomNumber(min, max, excludedNumbers);

  return generatedNumber;
};

const GameScreen: React.FC<Props> = ({ userChoice }) => {
  const [numberGuess, setNumberGuess] = useState(
    generateRandomNumber(1, 100, [userChoice])
  );
  return (
    <View style={styles.container}>
      <Text>Game Screen - my guess is</Text>
      <View>
        <Text style={styles.number}>{numberGuess}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10
  },
  number: {
    fontSize: 36,
    color: AppTheme.primary
  }
});

export default GameScreen;
