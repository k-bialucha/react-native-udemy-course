import React from 'react';
import { Button, Text, View } from 'react-native';

import {
  NavigationParams,
  NavigationScreenProp,
  NavigationState,
} from 'react-navigation';

import { CATEGORY_MEALS_SCREEN_NAME } from './CategoryMeals';
interface Props {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

export const CATEGORIES_SCREEN_NAME = 'categories';

const CategoriesScreen: React.FC<Props> = props => {
  return (
    <View>
      <Text>Categories</Text>
      <Button
        title="Go to Meals"
        onPress={() => {
          props.navigation.navigate(CATEGORY_MEALS_SCREEN_NAME);
        }}
      />
    </View>
  );
};

export default CategoriesScreen;
