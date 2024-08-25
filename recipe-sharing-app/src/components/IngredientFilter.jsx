import React from 'react';
import { useRecipeStore } from './recipeStore';

const IngredientFilter = () => {
  const setSearchTerm = useRecipeStore(state => state.setSearchTerm);

  return (
    <select onChange={(e) => setSearchTerm(e.target.value)}>
      <option value="">All Ingredients</option>
      <option value="chicken">Chicken</option>
      <option value="beef">Beef</option>
      <option value="vegetarian">Vegetarian</option>
      {/* Add more options based on your application's ingredients */}
    </select>
  );
};

export default IngredientFilter;