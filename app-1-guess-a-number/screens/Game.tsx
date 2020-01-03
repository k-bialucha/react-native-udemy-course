import React, { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

import Card from "../components/Card";
import NumberContainer from "../components/NumberContainer";

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
    <View style={styles.screen}>
      <Text>Game Screen - my guess is</Text>
      <NumberContainer number={numberGuess} />
      <Card style={styles.buttonsCard}>
        <Button
          title="lower"
          onPress={() => {
            setNumberGuess(generateRandomNumber(1, numberGuess, [userChoice]));
          }}
        />
        <Button
          title="greater"
          onPress={() => {
            setNumberGuess(
              generateRandomNumber(numberGuess, 100, [userChoice])
            );
          }}
        />
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center"
  },
  buttonsCard: {
    alignSelf: "stretch",
    flexDirection: "row",
    justifyContent: "space-around"
  }
});

export default GameScreen;
