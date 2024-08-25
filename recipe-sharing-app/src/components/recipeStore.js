import create from 'zustand';

export const useRecipeStore = create(set => ({
  recipes: [], // Array to hold all recipes
  searchTerm: '', // String to hold the current search term
  filteredRecipes: [], // Array to hold filtered recipes

  // Action to update the search term
  setSearchTerm: (term) => set(state => {
    // Update the search term and filter recipes based on the new term
    const searchTerm = term.toLowerCase();
    const filteredRecipes = state.recipes.filter(recipe => 
      recipe.title.toLowerCase().includes(searchTerm) ||
      recipe.ingredients.some(ingredient => 
        ingredient.toLowerCase().includes(searchTerm)
      ) ||
      recipe.prepTime <= parseInt(searchTerm)
    );
    
    return { searchTerm: term, filteredRecipes };
  }),

  // Action to set the initial recipes and compute the initial filteredRecipes
  setRecipes: (recipes) => set({
    recipes,
    filteredRecipes: recipes // Initially, all recipes are shown
  }),
}));


