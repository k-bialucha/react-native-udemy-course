import React from 'react';
import {
  ImageBackground,
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
  imageUrl: string;
  style?: ViewStyle;
  onPress?: (...args: any[]) => any;
}

const MealItem: React.FC<Props> = ({
  title,
  duration,
  complexity,
  affordability,
  imageUrl,
  style = {},
  onPress,
}) => {
  return (
    <View style={{ ...styles.main, ...style }}>
      <TouchableComponent style={{ flex: 1 }} onPress={onPress}>
        <View>
          <View style={{ ...styles.row, ...styles.mealHeader }}>
            <ImageBackground
              source={{ uri: imageUrl }}
              style={styles.backgroundImage}
            >
              <Text style={styles.title}>{title}</Text>
            </ImageBackground>
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
    minHeight: 180,
    backgroundColor: AppTheme.accent,
    marginHorizontal: 10,
    marginVertical: 5,
    paddingBottom: 10,
    borderRadius: 10,
    overflow: 'hidden',
  },
  row: {
    flexDirection: 'row',
  },
  mealHeader: {
    height: '80%',
    justifyContent: 'center',
  },
  mealDetail: {
    justifyContent: 'space-between',
    paddingVertical: 5,
    paddingHorizontal: 20,
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
  },
  title: {
    fontFamily: 'poppins',
    fontSize: 22,
    color: 'white',
    paddingVertical: 5,
    paddingHorizontal: 15,
    backgroundColor: 'rgba(15, 15, 15, 0.4)',
  },
});

export default MealItem;
