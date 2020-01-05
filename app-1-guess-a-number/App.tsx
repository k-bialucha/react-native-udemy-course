import React, { useState } from "react";
import { StyleSheet, View } from "react-native";

import Game from "./screens/Game";
import GameOverScreen from "./screens/GameOver";
import GameStart from "./screens/GameStart";
import Header from "./components/Header";

enum Screen {
  GameStart,
  Game,
  GameOver
}

export default function App() {
  const [userChoice, setUserChoice] = useState<number>(null);
  const [guessesCount, setGuessesCount] = useState<number>(null);

  const gameStartHandler = (userChoice: number) => {
    setUserChoice(userChoice);
    setGuessesCount(null);
  };

  const gameOverHandler = (roundCount: number) => {
    setGuessesCount(roundCount);
  };

  const newGameHandler = () => {
    setUserChoice(null);
    setGuessesCount(null);
  };

  let screen: Screen = Screen.GameStart;

  if (userChoice && !guessesCount) {
    screen = Screen.Game;
  } else if (userChoice && guessesCount) {
    screen = Screen.GameOver;
  }

  return (
    <View style={styles.screen}>
      <Header title="Guess a Number" />
      {screen === Screen.GameStart && (
        <GameStart onGameStart={gameStartHandler} />
      )}
      {screen === Screen.Game && (
        <Game userChoice={userChoice} onGameEnd={gameOverHandler} />
      )}
      {screen === Screen.GameOver && (
        <GameOverScreen
          guessedNumber={userChoice}
          guessesCount={guessesCount}
          onNewGame={newGameHandler}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});
