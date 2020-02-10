import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { NavigationStackProp } from 'react-navigation-stack';

import CategoryItem from '../components/CategoryItem';
import categories from '../data/categories';

// import { CATEGORY_MEALS_SCREEN_NAME } from './CategoryMeals';

interface Props {
  navigation: NavigationStackProp<{}>;
}

export const CATEGORIES_SCREEN_NAME = 'categories';

const CategoriesScreen: React.FC<Props> = props => {
  return (
    <View style={styles.screen}>
      <Text>Categories</Text>
      <FlatList
        data={categories}
        renderItem={item => (
          <CategoryItem
            title={item.item.title}
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
  },
  list: {
    flex: 1,
    width: '100%',
  },
  listItem: {
    flex: 1,
    height: 150,
    margin: 15,
  },
});

export default CategoriesScreen;
