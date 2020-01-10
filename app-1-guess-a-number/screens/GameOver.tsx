import React from "react";
import { Button, Image, StyleSheet, Text, View } from "react-native";

import AppText from "../components/AppText";
import AppTitle from "../components/AppTitle";
import Card from "../components/Card";

import AppTheme from "../AppTheme";

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
    <View style={styles.screen}>
      <Card style={styles.card}>
        <View>
          <AppTitle>Game is over</AppTitle>
          <View style={styles.imageContainer}>
            <Image
              resizeMode="cover"
              // source={require("../assets/success.png")}
              source={{
                uri:
                  "https://www.lirent.net/wp-content/uploads/2014/10/Android-Lollipop-wallpapers-p.png"
              }}
              fadeDuration={600}
              style={styles.image}
            />
          </View>
          <AppText style={styles.text}>
            Your number was{" "}
            <Text style={styles.highlightedText}>{guessedNumber}</Text>.
          </AppText>
          <AppText style={styles.text}>
            It took <Text style={styles.highlightedText}>{guessesCount}</Text>{" "}
            rounds to guess.
          </AppText>
          <Button title="new game" onPress={onNewGame} />
        </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    padding: 20
  },
  card: {
    marginBottom: 80
  },
  imageContainer: {
    width: "100%",
    height: 300,
    marginVertical: 15,
    borderRadius: 50,
    borderColor: AppTheme.accent,
    borderWidth: 5,
    overflow: "hidden"
  },
  image: {
    width: "100%",
    height: "100%"
  },
  text: {
    fontSize: 22,
    textAlign: "center"
  },
  highlightedText: {
    color: AppTheme.accent,
    fontFamily: "poppins-bold"
  }
});

export default GameOverScreen;
