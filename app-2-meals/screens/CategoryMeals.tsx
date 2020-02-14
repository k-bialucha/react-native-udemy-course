import React from 'react';
import { Button, FlatList, Platform, StyleSheet, View } from 'react-native';
import { NavigationStackScreenComponent } from 'react-navigation-stack';

import Category from '../models/Category';
import categories from '../data/categories';
import Meal from '../models/Meal';
import meals from '../data/meals';
import MealItem from '../components/MealItem';

import { MEAL_DETAILS_SCREEN_NAME } from './MealDetail';

export const CATEGORY_MEALS_SCREEN_NAME = 'categoryMeals';

const CategoryMealsScreen: NavigationStackScreenComponent = ({
  navigation,
}) => {
  const categoryId = navigation.getParam('categoryId');

  const category: Category = categories.find(
    category => category.id === categoryId
  );

  const categoryMeals = meals.filter((meal: Meal) =>
    meal.categoryIds.includes(categoryId)
  );

  return (
    <View style={styles.screen}>
      <FlatList
        data={categoryMeals}
        keyExtractor={item => `${item.id}${item.isGlutenFree ? '-GF' : ''}`}
        renderItem={item => (
          <MealItem
            title={item.item.title}
            style={{ backgroundColor: category.color }}
            onPress={() => {
              console.warn('Meal', item.item.title, 'pressed');
            }}
          />
        )}
        style={styles.list}
      />
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

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 2,
    paddingVertical: 16,
  },
  list: {
    flex: 1,
    width: '100%',
  },
});

export default CategoryMealsScreen;
