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
        <Text>Goals: {courseGoals.length}</Text>
        {courseGoals.map(goal => (
          <Text key={goal}>{goal}</Text>
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
});
