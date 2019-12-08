import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface Props {
  title: string;
}

const GoalItem: React.FC<Props> = ({ title }) => {
  return (
    <View style={styles.listItem}>
      <Text style={styles.listItemText}>{title}</Text>
    </View>
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
