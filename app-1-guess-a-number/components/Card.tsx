import React from "react";
import { View, StyleSheet, ViewStyle } from "react-native";

interface Props {
  style?: ViewStyle;
}

const Card: React.FC<Props> = props => {
  return (
    <View style={{ ...styles.card, ...props.style }}>{props.children}</View>
  );
};

const styles = StyleSheet.create({
  card: {
    shadowColor: "black",
    paddingVertical: 15,
    paddingHorizontal: 30,
    backgroundColor: "white",
    borderRadius: 10,
    marginTop: 20,
    // iOS shadow
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.26,
    // Android elevation
    elevation: 10
  }
});
export default Card;
