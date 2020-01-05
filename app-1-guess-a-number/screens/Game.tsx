import React, { useEffect, useRef, useState } from "react";
import { Alert, Button, StyleSheet, Text, View } from "react-native";

import Card from "../components/Card";
import NumberContainer from "../components/NumberContainer";

interface Props {
  userChoice: number;
  onGameEnd: (roundCount: number, ...args: number[]) => void;
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

const GameScreen: React.FC<Props> = ({ userChoice, onGameEnd }) => {
  const [numberGuess, setNumberGuess] = useState<number>(
    generateRandomNumber(1, 100, [userChoice])
  );
  const [guessesCount, setGuessesCount] = useState(1);

  const lowerBound = useRef<number>(1);
  const upperBound = useRef<number>(100);

  const updateGuess = () => {
    const nextGuess: number = generateRandomNumber(
      lowerBound.current,
      upperBound.current,
      []
    );
    setGuessesCount(guessesCount => guessesCount + 1);
    setNumberGuess(nextGuess);
  };

  useEffect(() => {
    if (numberGuess === userChoice) {
      onGameEnd(guessesCount);
    }
  }, [userChoice, numberGuess, onGameEnd]);

  const showFoolingAlert = () => {
    Alert.alert(
      "Disgusting behavior spotted!",
      `You're trying to fool, I know you...`,
      [{ text: "Sorry...", style: "cancel" }]
    );
  };

  return (
    <View style={styles.screen}>
      <Text>Game Screen - my guess is</Text>
      <NumberContainer number={numberGuess} />
      <View>
        <Text>Guesses: {guessesCount}</Text>
      </View>
      <Card style={styles.buttonsCard}>
        <Button
          title="lower"
          onPress={() => {
            const isUserTruthful: boolean = userChoice < numberGuess;

            if (!isUserTruthful) {
              showFoolingAlert();
              return;
            }

            upperBound.current = numberGuess;
            updateGuess();
          }}
        />
        <Button
          title="greater"
          onPress={() => {
            const isUserTrustworthy: boolean = userChoice > numberGuess;

            if (!isUserTrustworthy) {
              showFoolingAlert();
              return;
            }

            lowerBound.current = numberGuess;
            updateGuess();
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
