import React, { useEffect, useState } from "react";
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View
} from "react-native";

import AppText from "../components/AppText";
import AppTitle, { AppTitleSize } from "../components/AppTitle";
import Card from "../components/Card";
import MainButton from "../components/MainButton";

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
  const [cardHeight, setCardHeight] = useState<number>(
    Dimensions.get("window").height * 0.75
  );
  const [screenPadding, setScreenPadding] = useState(
    Dimensions.get("window").width > 400 ? 20 : 5
  );

  const updateCardHeight = () => {
    const { width, height } = Dimensions.get("window");
    const isLandscape = width > height;

    setCardHeight(height * (isLandscape ? 0.6 : 0.75));
    setScreenPadding(width > (isLandscape ? 600 : 400) ? 20 : 5);
  };

  useEffect(() => {
    Dimensions.addEventListener("change", updateCardHeight);
    return () => {
      Dimensions.removeEventListener("change", updateCardHeight);
    };
  }, []);
  return (
    <View style={{ ...styles.screen, padding: screenPadding }}>
      <Card style={{ ...styles.card, height: cardHeight }}>
        <ScrollView contentContainerStyle={styles.cardInnerContent}>
          <AppTitle
            size={
              Dimensions.get("window").width > 400
                ? AppTitleSize.Large
                : AppTitleSize.Small
            }
          >
            Game is over
          </AppTitle>
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
          <View>
            <AppText style={styles.text}>
              Your number was{" "}
              <Text style={styles.highlightedText}>{guessedNumber}</Text>.
            </AppText>
            <AppText style={styles.text}>
              It took <Text style={styles.highlightedText}>{guessesCount}</Text>{" "}
              rounds to guess.
            </AppText>
          </View>
          <View style={styles.buttonContainer}>
            <MainButton onPress={onNewGame}>new game</MainButton>
          </View>
        </ScrollView>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1
  },
  card: {
    marginBottom: 80,
    ...(Dimensions.get("window").width <= 400
      ? {
          paddingHorizontal: 6,
          paddingVertical: 8
        }
      : {})
  },
  cardInnerContent: {
    flexGrow: 1,
    justifyContent: "space-between"
  },
  imageContainer: {
    width: Math.floor(Dimensions.get("window").width * 0.7),
    height: Math.floor(Dimensions.get("window").width * 0.7),
    marginVertical: Dimensions.get("window").width > 400 ? 15 : 5,
    borderRadius: Math.floor(Dimensions.get("window").width * 0.1),
    borderColor: AppTheme.accent,
    borderWidth: Dimensions.get("window").width > 400 ? 6 : 4,
    overflow: "hidden",
    alignSelf: "center"
  },
  image: {
    width: "100%",
    height: "100%"
  },
  text: {
    fontSize: Dimensions.get("window").width > 400 ? 26 : 18,
    textAlign: "center"
  },
  highlightedText: {
    color: AppTheme.accent,
    fontFamily: "poppins-bold"
  },
  buttonContainer: {
    width: "60%",
    alignSelf: "center"
  }
});

export default GameOverScreen;
