import React, { useState } from 'react';
import { Button, StyleSheet, TextInput, View } from 'react-native';

interface Props {
  onAddGoal: (newGoal: string) => void;
}

const GoalInput: React.FC<Props> = ({ onAddGoal }) => {
  const [courseGoal, setCourseGoalText] = useState<string>('');

  return (
    <View style={styles.inputArea}>
      <TextInput
        placeholder="Course goal..."
        style={styles.textInput}
        value={courseGoal}
        onChangeText={setCourseGoalText}
      />
      <Button title="add" onPress={() => onAddGoal(courseGoal)} />
    </View>
  );
};

const styles = StyleSheet.create({
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

export default GoalInput;
