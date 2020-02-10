import React from 'react';
import { StyleSheet, Text, View, ViewStyle } from 'react-native';

interface Props {
  title: string;
  style?: ViewStyle;
}

const CategoryItem: React.FC<Props> = ({ title, style = {} }) => {
  return (
    <View style={style}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    color: 'white',
    fontSize: 24,
    fontWeight: '600',
    textAlign: 'center',
    paddingVertical: 30,
  },
});

export default CategoryItem;
