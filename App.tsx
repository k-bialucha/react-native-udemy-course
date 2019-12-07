import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  return (
    <View style={{ padding: 30 }}>
      <View>
        <TextInput
          placeholder="Course goal..."
          style={{
            borderColor: '#aaa',
            borderWidth: 2,
            padding: 5,
            marginBottom: 15,
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
