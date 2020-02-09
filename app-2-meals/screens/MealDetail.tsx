import React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationStackProp } from 'react-navigation-stack';

interface Props {
  navigation: NavigationStackProp<{}>;
}

export const MEAL_DETAILS_SCREEN_NAME = 'mealDetails';

const MealDetailScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <View>
      <Text>Meal Detail</Text>
      <Button
        title="Go to Main Screen"
        onPress={() => {
          navigation.popToTop();
        }}
      />
    </View>
  );
};

export default MealDetailScreen;
