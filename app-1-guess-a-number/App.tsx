import React, { useState } from "react";
import { StyleSheet, View } from "react-native";

import Game from "./screens/Game";
import GameStart from "./screens/GameStart";
import Header from "./components/Header";

export default function App() {
  const [userChoice, setUserChoice] = useState<number>(null);

  return (
    <View style={styles.screen}>
      <Header title="Guess a Number" />
      {userChoice ? (
        <Game userChoice={userChoice} />
      ) : (
        <GameStart onGameStart={setUserChoice} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});
