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

const supportTouchableNativeFeedback: boolean =
  Platform.OS === 'android' && Platform.Version >= 21;

const TouchableComponent: React.ComponentType<TouchableOpacityProps> = supportTouchableNativeFeedback
  ? TouchableNativeFeedback
  : TouchableOpacity;

interface Props {
  title: string;
  color: string;
  style?: ViewStyle;
  onPress: (...args: any[]) => any;
}

const CategoryItem: React.FC<Props> = ({
  title,
  style = {},
  color,
  onPress,
}) => {
  return (
    <View style={{ ...styles.main, ...style }}>
      <TouchableComponent onPress={onPress}>
        <View style={{ ...styles.tile, backgroundColor: color }}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </TouchableComponent>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    borderRadius: 16,
    overflow: 'hidden',
  },
  tile: {
    width: '100%',
    height: '100%',
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    elevation: 3,
    padding: 15,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  title: {
    color: 'white',
    fontSize: 22,
    fontWeight: '600',
    textAlign: 'right',
    fontFamily: 'poppins',
  },
});

export default CategoryItem;
