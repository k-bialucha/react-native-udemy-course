import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import CategoriesScreen from './screens/Categories';
import CategoryMealsScreen from './screens/CategoryMeals';
import MealDetailScreen from './screens/MealDetail';

const Navigator = createStackNavigator({
  categories: CategoriesScreen,
  categoryMeals: CategoryMealsScreen,
  mealDetails: MealDetailScreen,
});

export default createAppContainer(Navigator);
