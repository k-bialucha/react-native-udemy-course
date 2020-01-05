import React from "react";
import { View, Text, Button } from "react-native";

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
          <Text>Game is over</Text>
          <Text>Your number was {guessedNumber}.</Text>
          <Text>It took {guessesCount} rounds to guess.</Text>
          <Button title="new game" onPress={onNewGame} />
        </View>
      </Card>
    </View>
  );
};

export default GameOverScreen;
