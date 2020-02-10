import React from 'react';
import { Button, Text, View } from 'react-native';
import { NavigationStackProp } from 'react-navigation-stack';

import Category from '../models/Category';
import categories from '../data/categories';

import { MEAL_DETAILS_SCREEN_NAME } from './MealDetail';

interface Props {
  navigation: NavigationStackProp<{}>;
}

export const CATEGORY_MEALS_SCREEN_NAME = 'categoryMeals';

const CategoryMealsScreen: React.FC<Props> = ({ navigation }) => {
  const categoryId = navigation.getParam('categoryId');

  const category: Category = categories.find(
    category => category.id === categoryId
  );

  return (
    <View>
      <Text>Category Meals</Text>
      <Text>Selected: {category.title.toUpperCase()}</Text>
      <Button
        title="Show details"
        onPress={() => {
          navigation.navigate(MEAL_DETAILS_SCREEN_NAME);
        }}
      />
    </View>
  );
};

export default CategoryMealsScreen;
