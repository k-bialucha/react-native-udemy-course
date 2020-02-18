import React from 'react';
import { Button, Platform, Text, View } from 'react-native';
import { NavigationStackScreenComponent } from 'react-navigation-stack';

import categories from '../data/categories';
import Category from '../models/Category';
import meals from '../data/meals';
import Meal from '../models/Meal';

export const MEAL_DETAILS_SCREEN_NAME = 'mealDetails';

const findMealById = (id: string) => {
  const meal: Meal = meals.find(meal => meal.id === id);
  return meal;
};

const MealDetailScreen: NavigationStackScreenComponent = ({ navigation }) => {
  const id: string = navigation.getParam('id');
  const meal: Meal = findMealById(id);

  return (
    <View>
      <Text>{meal.title}</Text>
      <Text>complexity - {meal.complexity}</Text>
      <Text>steps: - [{meal.steps.join('] -> [')}]</Text>
      <Button
        title="Go to Main Screen"
        onPress={() => {
          navigation.popToTop();
        }}
      />
    </View>
  );
};

MealDetailScreen.navigationOptions = ({ navigation, ...rest }) => {
  const id: string = navigation.getParam('id');
  const meal: Meal = findMealById(id);

  const category = categories.find((category: Category) =>
    meal.categoryIds.includes(category.id)
  );

  return {
    headerTitle: meal.title.toUpperCase(),
    headerStyle: {
      backgroundColor: Platform.OS === 'android' ? category.color : null,
    },
    headerTintColor: Platform.OS === 'android' ? 'white' : category.color,
  };
};

export default MealDetailScreen;
