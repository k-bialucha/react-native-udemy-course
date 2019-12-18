import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, View, FlatList } from 'react-native';

import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';

class GoalListItem {
  static itemCount: number = 0;
  public key: string = `${GoalListItem.itemCount++}`;
  constructor(public title: string) {}
}

const initialItems: GoalListItem[] = [
  new GoalListItem('Learn React Native'),
  new GoalListItem('do the dishes'),
];

export default function App() {
  const [courseGoals, setCourseGoals] = useState<GoalListItem[]>(initialItems);

  const handleAddGoal = (courseGoal: string) => {
    setCourseGoals(currentCourseGoals => [
      ...currentCourseGoals,
      new GoalListItem(courseGoal),
    ]);
  };

  const handleRemoveGoal = (itemToRemoveKey: string) => {
    setCourseGoals((courseGoals: GoalListItem[]) => {
      const goalsFiltered = courseGoals.filter(
        (goal: GoalListItem) => goal.key !== itemToRemoveKey
      );

      return goalsFiltered;
    });
  };

  return (
    <View style={styles.container}>
      <GoalInput onAddGoal={handleAddGoal} />
      <ScrollView>
        <Text style={styles.goalsHeaderText}>Goals: {courseGoals.length}</Text>
        <FlatList
          data={courseGoals}
          renderItem={itemData => (
            <GoalItem
              onDeleteItem={() => handleRemoveGoal(itemData.item.key)}
              title={itemData.item.title}
            />
          )}
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
