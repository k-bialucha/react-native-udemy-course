import React, { useState } from 'react';
import { enableScreens } from 'react-native-screens';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';

import NavigationContainer from './NavigationContainer';

enableScreens();

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

  return <NavigationContainer />;
}
