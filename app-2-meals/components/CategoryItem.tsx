import React from 'react';
import { StyleSheet, Text, View, ViewStyle } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

interface Props {
  title: string;
  style?: ViewStyle;
  onPress: (...args: any[]) => any;
}

const CategoryItem: React.FC<Props> = ({ title, style = {}, onPress }) => {
  return (
    <View style={style}>
      <TouchableOpacity onPress={onPress}>
        <View style={styles.tile}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  tile: {
    width: '100%',
    height: '100%',
  },
  title: {
    color: 'white',
    fontSize: 24,
    fontWeight: '600',
    textAlign: 'center',
    paddingVertical: 30,
  },
});

export default CategoryItem;
