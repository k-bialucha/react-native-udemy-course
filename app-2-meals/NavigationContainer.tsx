import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import CategoriesScreen, { CATEGORIES_SCREEN_NAME } from './screens/Categories';
import CategoryMealsScreen, {
  CATEGORY_MEALS_SCREEN_NAME,
} from './screens/CategoryMeals';
import MealDetailScreen, {
  MEAL_DETAILS_SCREEN_NAME,
} from './screens/MealDetail';

const Navigator = createStackNavigator({
  [CATEGORIES_SCREEN_NAME]: CategoriesScreen,
  [CATEGORY_MEALS_SCREEN_NAME]: CategoryMealsScreen,
  [MEAL_DETAILS_SCREEN_NAME]: MealDetailScreen,
});

export default createAppContainer(Navigator);
