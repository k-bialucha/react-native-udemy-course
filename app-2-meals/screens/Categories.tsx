import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { NavigationStackProp } from 'react-navigation-stack';

import CategoryItem from '../components/CategoryItem';
import categories from '../data/categories';

import { CATEGORY_MEALS_SCREEN_NAME } from './CategoryMeals';

interface Props {
  navigation: NavigationStackProp<{}>;
}

export const CATEGORIES_SCREEN_NAME = 'categories';

const CategoriesScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <View style={styles.screen}>
      <FlatList
        data={categories}
        renderItem={item => (
          <CategoryItem
            title={item.item.title}
            onPress={() => {
              navigation.navigate(CATEGORY_MEALS_SCREEN_NAME);
            }}
            style={{ ...styles.listItem, backgroundColor: item.item.color }}
          />
        )}
        numColumns={2}
        style={styles.list}
      />
    </View>
  );
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
  listItem: {
    flex: 1,
    height: 150,
    marginHorizontal: 4,
    marginVertical: 3,
  },
});

export default CategoriesScreen;
