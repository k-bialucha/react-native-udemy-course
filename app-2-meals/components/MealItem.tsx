import React from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
  ViewStyle,
} from 'react-native';
import AppTheme from '../AppTheme';

const supportTouchableNativeFeedback: boolean =
  Platform.OS === 'android' && Platform.Version >= 21;

const TouchableComponent: React.ComponentType<TouchableOpacityProps> = supportTouchableNativeFeedback
  ? TouchableNativeFeedback
  : TouchableOpacity;

interface Props {
  title: string;
  style?: ViewStyle;
  onPress?: (...args: any[]) => any;
}

const MealItem: React.FC<Props> = ({ title, style = {}, onPress }) => {
  return (
    <TouchableComponent onPress={onPress}>
      <View>
        <View style={{ ...styles.main, ...style }}>
          <Text style={styles.title}>{title}</Text>
        </View>
        <View></View>
      </View>
    </TouchableComponent>
  );
};

const styles = StyleSheet.create({
  main: {
    minHeight: 60,
    backgroundColor: AppTheme.accent,
    borderRadius: 10,
    marginHorizontal: 10,
    marginVertical: 5,
    padding: 10,
  },
  title: { color: 'white', fontSize: 24 },
});

export default MealItem;
