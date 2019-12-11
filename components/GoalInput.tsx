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
        <View style={styles.modal}>
          <TextInput
            placeholder="Course goal..."
            style={styles.textInput}
            value={courseGoal}
            onChangeText={setCourseGoalText}
          />
          <View style={styles.actionButtons}>
            <View style={styles.actionButton}>
              <Button
                title="add"
                onPress={() => {
                  onAddGoal(courseGoal);
                  setCourseGoalText('');
                  setIsAddModeEnabled(false);
                }}
              />
            </View>
            <View style={styles.actionButton}>
              <Button
                title="close"
                color="grey"
                onPress={() => {
                  setCourseGoalText('');
                  setIsAddModeEnabled(false);
                }}
              />
            </View>
          </View>
        </View>
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
  modal: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
  textInput: {
    borderColor: '#bbb',
    borderWidth: 2,
    padding: 8,
    width: '90%',
  },
  actionButtons: {
    flexDirection: 'row',
    marginTop: 10,
    width: '80%',
  },
  actionButton: {
    flex: 1,
    marginHorizontal: 3,
  },
});

export default GoalInput;
