import React from "react";
import { View, Text } from "react-native";

import Card from "../components/Card";

interface Props {}

const GameOverScreen: React.FC<Props> = () => {
  return (
    <View>
      <Card>
        <View>
          <Text>Game is over</Text>
        </View>
      </Card>
    </View>
  );
};

export default GameOverScreen;
