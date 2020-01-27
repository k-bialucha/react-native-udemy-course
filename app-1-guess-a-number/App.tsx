import React, { useState } from "react";
import { StyleSheet, View } from "react-native";

import { AppLoading, ScreenOrientation } from "expo";
import * as Font from "expo-font";

import Game from "./screens/Game";
import GameOverScreen from "./screens/GameOver";
import GameStart from "./screens/GameStart";
import Header from "./components/Header";
import { Orientation } from "expo/build/ScreenOrientation/ScreenOrientation";

const fetchFont = () => {
  return Font.loadAsync({
    poppins: require("./assets/fonts/Poppins-Regular.ttf"),
    "poppins-bold": require("./assets/fonts/Poppins-Bold.ttf")
  });
};

enum Screen {
  GameStart,
  Game,
  GameOver
}

export default function App() {
  const [initialLoadingDone, setInitialLoadingDone] = useState<boolean>(false);
  const [userChoice, setUserChoice] = useState<number>(null);
  const [guessesCount, setGuessesCount] = useState<number>(null);

  if (!initialLoadingDone) {
    return (
      <AppLoading
        startAsync={fetchFont}
        onFinish={() => {
          setInitialLoadingDone(true);
        }}
        onError={(err: Error) => {
          console.warn("someting failed!");
        }}
      />
    );
  }

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
