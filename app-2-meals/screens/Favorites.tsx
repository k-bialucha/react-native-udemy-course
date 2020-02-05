import React from 'react';
import { View, Text } from 'react-native';

interface Props {}

export const FAVORITES_SCREEN_NAME = 'favorites';

const FavoritesScreen: React.FC<Props> = () => {
  return (
    <View>
      <Text>Favorites</Text>
    </View>
  );
};

export default FavoritesScreen;
