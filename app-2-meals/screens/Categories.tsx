import React from 'react';
import { Button, Text, View } from 'react-native';
import { NavigationStackProp } from 'react-navigation-stack';

import { CATEGORY_MEALS_SCREEN_NAME } from './CategoryMeals';

interface Props {
  navigation: NavigationStackProp<{}>;
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
