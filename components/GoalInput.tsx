import React, { useState } from 'react';
import { Button, Modal, StyleSheet, TextInput, View } from 'react-native';

interface Props {
  onAddGoal: (newGoal: string) => void;
}

const GoalInput: React.FC<Props> = ({ onAddGoal }) => {
  const [courseGoal, setCourseGoalText] = useState<string>('');
  const [isAddModeEnabled, setIsAddModeEnabled] = useState<boolean>(false);

  return (
    <View style={styles.inputArea}>
      <Modal visible={isAddModeEnabled} animationType="slide">
        <TextInput
          placeholder="Course goal..."
          style={styles.textInput}
          value={courseGoal}
          onChangeText={setCourseGoalText}
        />
        <Button
          title="add"
          onPress={() => {
            onAddGoal(courseGoal);
            setCourseGoalText('');
            setIsAddModeEnabled(false);
          }}
        />
        <Button
          title="close"
          onPress={() => {
            setCourseGoalText('');
            setIsAddModeEnabled(false);
          }}
        />
      </Modal>
      <Button title="new" onPress={() => setIsAddModeEnabled(true)} />
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
