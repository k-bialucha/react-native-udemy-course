import React, { useEffect, useRef, useState } from "react";
import {
  Alert,
  Dimensions,
  FlatList,
  StyleSheet,
  View /* ScrollView */
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

import AppText from "../components/AppText";
import AppTitle, { AppTitleSize } from "../components/AppTitle";
import Card from "../components/Card";
import MainButton from "../components/MainButton";
import NumberContainer from "../components/NumberContainer";

import AppTheme from "../AppTheme";

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
  const initialGuess = useRef<number>(
    generateRandomNumber(1, 100, [userChoice])
  );

  const [numberGuess, setNumberGuess] = useState<number>(initialGuess.current);
  const [guessesHistory, setGuessesHistory] = useState<number[]>([
    initialGuess.current
  ]);

  const lowerBound = useRef<number>(1);
  const upperBound = useRef<number>(100);

  const updateGuess = () => {
    const nextGuess: number = generateRandomNumber(
      lowerBound.current,
      upperBound.current,
      guessesHistory
    );

    setGuessesHistory(guessesList => [nextGuess, ...guessesList]);
    setNumberGuess(nextGuess);
  };

  useEffect(() => {
    if (numberGuess === userChoice) {
      onGameEnd(guessesHistory.length);
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
      <AppTitle size={AppTitleSize.Small}>My guess is:</AppTitle>
      <NumberContainer number={numberGuess} />
      <View>
        <AppText>Guesses: {guessesHistory.length}</AppText>
      </View>
      <Card style={styles.buttonsCard}>
        <MainButton
          onPress={() => {
            const isUserTruthful: boolean = userChoice < numberGuess;

            if (!isUserTruthful) {
              showFoolingAlert();
              return;
            }

            upperBound.current = numberGuess;
            updateGuess();
          }}
        >
          <Ionicons name="md-arrow-round-down" size={24} color="white" />
        </MainButton>
        <MainButton
          onPress={() => {
            const isUserTrustworthy: boolean = userChoice > numberGuess;

            if (!isUserTrustworthy) {
              showFoolingAlert();
              return;
            }

            lowerBound.current = numberGuess;
            updateGuess();
          }}
        >
          <Ionicons name="md-arrow-round-up" size={24} color="white" />
        </MainButton>
      </Card>
      <View style={styles.list}>
        {/* <ScrollView contentContainerStyle={styles.listInnerContent}>
          {guessesHistory.map((guess, index) => (
            <Card key={guess} style={styles.listCard}>
              <View style={styles.listItem}>
                <AppText>#{guessesHistory.length - index}</AppText>
                <AppText style={styles.listItemText}>{guess}</AppText>
              </View>
            </Card>
          ))}
        </ScrollView> */}
        <FlatList
          data={guessesHistory}
          renderItem={itemData => (
            <Card style={styles.listCard}>
              <View style={styles.listItem}>
                <AppText>#{guessesHistory.length - itemData.index}</AppText>
                <AppText style={styles.listItemText}>{itemData.item}</AppText>
              </View>
            </Card>
          )}
          contentContainerStyle={styles.listInnerContent}
          keyExtractor={item => `${item}`}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: Dimensions.get("screen").width > 400 ? 24 : 6,
    alignItems: "center"
  },
  buttonsCard: {
    alignSelf: "stretch",
    flexDirection: "row",
    justifyContent: "space-around"
  },
  list: {
    flex: 1,
    width: "70%",
    minWidth: 140,
    padding: 18
  },
  listInnerContent: {
    flexGrow: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    padding: 20
  },
  listCard: {
    width: "100%",
    paddingHorizontal: Dimensions.get("screen").width > 400 ? 20 : 5
  },
  listItem: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%"
  },
  listItemText: {
    color: AppTheme.accent,
    fontFamily: "poppins-bold"
  }
});

export default GameScreen;
