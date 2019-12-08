import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

interface Props {
  title: string;
  onDeleteItem: (...args: any[]) => any;
}

const GoalItem: React.FC<Props> = ({ title, onDeleteItem }) => {
  return (
    <TouchableOpacity
      onLongPress={onDeleteItem}
      delayLongPress={1200}
      activeOpacity={0.5}
    >
      <View style={styles.listItem}>
        <Text style={styles.listItemText}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listItem: {
    borderBottomColor: '#aab',
    borderBottomWidth: 2,
    marginTop: 5,
    marginBottom: 10,
    padding: 5,
  },
  listItemText: {
    fontSize: 24,
  },
});

export default GoalItem;
