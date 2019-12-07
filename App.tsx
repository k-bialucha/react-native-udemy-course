import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  return (
    <View style={{ padding: 30 }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: 15,
        }}
      >
        <TextInput
          placeholder="Course goal..."
          style={{
            borderColor: '#bbb',
            borderWidth: 2,
            padding: 5,
            flexBasis: '70%',
          }}
        />
        <Button title="add" onPress={null} />
      </View>
      <View>
        <Text>Content</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
