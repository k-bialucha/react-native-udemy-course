import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';

const fetchFonts = () => {
  return Font.loadAsync({
    poppins: require('./assets/fonts/Poppins-Regular.ttf'),
    'poppins-bold': require('./assets/fonts/Poppins-Bold.ttf'),
  });
};

export default function App() {
  const [isAppLoaded, setIsAppLoaded] = useState<boolean>(false);

  if (!isAppLoaded)
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setIsAppLoaded(true)}
        onError={(err: Error) => {
          console.warn('something failed!');
        }}
      />
    );
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
