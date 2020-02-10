import React from 'react';
import { Button, Text, View, Platform } from 'react-native';
import { NavigationStackScreenComponent } from 'react-navigation-stack';

import Category from '../models/Category';
import categories from '../data/categories';

import { MEAL_DETAILS_SCREEN_NAME } from './MealDetail';

export const CATEGORY_MEALS_SCREEN_NAME = 'categoryMeals';

const CategoryMealsScreen: NavigationStackScreenComponent = ({
  navigation,
}) => {
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

CategoryMealsScreen.navigationOptions = ({ navigation }) => {
  const categoryId = navigation.getParam('categoryId');

  const { title, color } = categories.find(
    category => category.id === categoryId
  );

  return {
    title: title.toUpperCase(),
    headerStyle: {
      backgroundColor: Platform.OS === 'android' ? color : null,
    },
    headerTintColor: Platform.OS === 'android' ? 'white' : color,
  };
};

export default CategoryMealsScreen;
