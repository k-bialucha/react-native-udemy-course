import React, { useState } from 'react';
import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  FlatList,
} from 'react-native';

import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';

class ListItem {
  static itemCount: number = 0;
  public key: string = `${ListItem.itemCount++}`;
  constructor(public title: string) {}
}

const initialItems: ListItem[] = [
  new ListItem('Learn React Native'),
  new ListItem('do the dishes'),
];

export default function App() {
  const [courseGoal, setCourseGoalText] = useState<string>('');
  const [courseGoals, setCourseGoals] = useState<ListItem[]>(initialItems);

  const handleAddGoal = () => {
    setCourseGoals(currentCourseGoals => [
      ...currentCourseGoals,
      new ListItem(courseGoal),
    ]);
    setCourseGoalText('');
  };

  return (
    <View style={styles.container}>
      <GoalInput
        goal={courseGoal}
        onGoalChange={setCourseGoalText}
        onAddGoal={handleAddGoal}
      />
      <ScrollView>
        <Text style={styles.goalsHeaderText}>Goals: {courseGoals.length}</Text>
        <FlatList
          data={courseGoals}
          renderItem={itemData => <GoalItem title={itemData.item.title} />}
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 30 },
  goalsHeaderText: {
    fontSize: 32,
    fontWeight: '600',
    paddingHorizontal: 5,
    paddingVertical: 3,
    color: '#844',
  },
});
