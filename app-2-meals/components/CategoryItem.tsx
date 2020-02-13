import React from 'react';
import { StyleSheet, Text, View, ViewStyle } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

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
      <TouchableOpacity onPress={onPress}>
        <View style={{ ...styles.tile, backgroundColor: color }}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </TouchableOpacity>
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
