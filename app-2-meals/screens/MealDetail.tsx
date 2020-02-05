import React from 'react';
import { View, Text } from 'react-native';

interface Props {}

export const MEAL_DETAILS_SCREEN_NAME = 'mealDetails';

const MealDetailScreen: React.FC<Props> = () => {
  return (
    <View>
      <Text>Meal Detail</Text>
    </View>
  );
};

export default MealDetailScreen;
