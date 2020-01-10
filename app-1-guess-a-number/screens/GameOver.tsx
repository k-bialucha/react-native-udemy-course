import React from "react";
import { Button, View } from "react-native";

import AppText from "../components/AppText";
import AppTitle from "../components/AppTitle";
import Card from "../components/Card";

interface Props {
  guessedNumber: number;
  guessesCount: number;
  onNewGame: () => void;
}

const GameOverScreen: React.FC<Props> = ({
  guessesCount,
  guessedNumber,
  onNewGame
}) => {
  return (
    <View>
      <Card>
        <View>
          <AppTitle>Game is over</AppTitle>
          <AppText>Your number was {guessedNumber}.</AppText>
          <AppText>It took {guessesCount} rounds to guess.</AppText>
          <Button title="new game" onPress={onNewGame} />
        </View>
      </Card>
    </View>
  );
};

export default GameOverScreen;
