import React from 'react';
import { Button, Text, View, Platform } from 'react-native';
import { NavigationStackScreenComponent } from 'react-navigation-stack';

import Category from '../models/Category';
import categories from '../data/categories';

import { MEAL_DETAILS_SCREEN_NAME } from './MealDetail';

import Meal from '../models/Meal';
import meals from '../data/meals';

export const CATEGORY_MEALS_SCREEN_NAME = 'categoryMeals';

const CategoryMealsScreen: NavigationStackScreenComponent = ({
  navigation,
}) => {
  const categoryId = navigation.getParam('categoryId');

  const category: Category = categories.find(
    category => category.id === categoryId
  );

  const categoryMeals = meals
    .filter((meal: Meal) => meal.categoryIds.includes(categoryId))
    .map(
      (meal: Meal) =>
        `${meal.title} / ${meal.affordability} / ${meal.complexity}`
    );
  console.warn('meals ->>> xdd', categoryId);
  return (
    <View>
      <Text>Category Meals</Text>
      <Text>Selected: {category.title.toUpperCase()}</Text>
      {categoryMeals.map(meal => (
        <Text key={meal}>{meal}</Text>
      ))}
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
    headerTitle: title.toUpperCase(),
    headerStyle: {
      backgroundColor: Platform.OS === 'android' ? color : null,
    },
    headerTintColor: Platform.OS === 'android' ? 'white' : color,
  };
};

export default CategoryMealsScreen;
