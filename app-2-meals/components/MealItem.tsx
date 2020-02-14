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
  duration: number;
  complexity: number;
  affordability: number;
  style?: ViewStyle;
  onPress?: (...args: any[]) => any;
}

const MealItem: React.FC<Props> = ({
  title,
  duration,
  complexity,
  affordability,
  style = {},
  onPress,
}) => {
  return (
    <View style={{ ...styles.main, ...style }}>
      <TouchableComponent style={{ flex: 1 }} onPress={onPress}>
        <View>
          <View style={{ ...styles.row, ...styles.mealHeader }}>
            <Text style={styles.title}>{title}</Text>
          </View>
          <View style={{ ...styles.row, ...styles.mealDetail }}>
            <Text>Time: {duration}m</Text>
            <Text>Complexity: {complexity}</Text>
            <Text>Affordability: {affordability}</Text>
          </View>
        </View>
      </TouchableComponent>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    minHeight: 160,
    backgroundColor: AppTheme.accent,
    borderRadius: 10,
    marginHorizontal: 10,
    marginVertical: 5,
    padding: 10,
  },
  row: {
    flexDirection: 'row',
  },
  mealHeader: {
    height: '75%',
    justifyContent: 'center',
  },
  mealDetail: {
    justifyContent: 'space-between',
    paddingVertical: 5,
    paddingHorizontal: 20,
  },
  title: {
    color: 'white',
    fontSize: 24,
  },
});

export default MealItem;
