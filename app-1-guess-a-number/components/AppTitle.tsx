import React from "react";
import { Text, TextStyle, StyleSheet } from "react-native";

import AppTheme from "../AppTheme";

export enum AppTitleSize {
  Small = 24,
  Medium = 28,
  Large = 36
}

interface Props {
  size?: AppTitleSize;
  style?: TextStyle;
  children: string;
}

const AppTitle: React.FC<Props> = ({
  size = AppTitleSize.Medium,
  style,
  children
}) => {
  return (
    <Text
      style={{ ...styles.appTitle, fontSize: size, ...(style ?? {}) }}
      numberOfLines={1}
      ellipsizeMode="tail"
    >
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  appTitle: {
    fontFamily: "poppins-bold",
    color: AppTheme.primary
  }
});

export default AppTitle;
