import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  const [courseGoal, setCourseGoalText] = useState<string>('');
  const [courseGoals, setCourseGoals] = useState<string[]>([]);

  const handleAddGoal = () => {
    setCourseGoals(currentCourseGoals => [...currentCourseGoals, courseGoal]);
    setCourseGoalText('');
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputArea}>
        <TextInput
          placeholder="Course goal..."
          style={styles.textInput}
          value={courseGoal}
          onChangeText={setCourseGoalText}
        />
        <Button
          title="add"
          onPress={() => {
            console.warn(`Goal is: "${courseGoal}"`);
            handleAddGoal();
          }}
        />
      </View>
      <View>
        <Text style={styles.goalsHeaderText}>Goals: {courseGoals.length}</Text>
        {courseGoals.map(goal => (
          <View key={goal} style={styles.listItem}>
            <Text style={styles.listItemText}>{goal}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 30 },
  inputArea: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  textInput: {
    borderColor: '#bbb',
    borderWidth: 2,
    padding: 5,
    flexBasis: '70%',
  },
  goalsHeaderText: {
    fontSize: 32,
    fontWeight: '600',
    paddingHorizontal: 5,
    paddingVertical: 3,
    color: '#844',
  },
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
