import React from 'react';
import { View, Text } from 'react-native';

interface Props {}

export const FILTERS_SCREEN_NAME = 'filters';

const FiltersScreen: React.FC<Props> = () => {
  return (
    <View>
      <Text>Filters</Text>
    </View>
  );
};

export default FiltersScreen;
