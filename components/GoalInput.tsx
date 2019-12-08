import React from 'react';
import { Button, StyleSheet, TextInput, View } from 'react-native';

interface Props {
  goal: string;
  onGoalChange: (goal: string) => any;
  onAddGoal: () => any;
}

const GoalInput: React.FC<Props> = ({ goal, onGoalChange, onAddGoal }) => {
  return (
    <View style={styles.inputArea}>
      <TextInput
        placeholder="Course goal..."
        style={styles.textInput}
        value={goal}
        onChangeText={onGoalChange}
      />
      <Button title="add" onPress={onAddGoal} />
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
