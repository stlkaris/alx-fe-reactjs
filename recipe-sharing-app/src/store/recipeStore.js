import create from 'zustand';

export const useRecipeStore = create(set => ({
  recipes: [], // Array to hold all recipes
  searchTerm: '', // String to hold the current search term
  filteredRecipes: [], // Array to hold filtered recipe
    favorites: [],
    recommendations: [],
  
  // Action to update the search term
  setSearchTerm: (term) => set(state => {

  // Action to add a new recipe
  addRecipe: (newRecipe) => set(state => ({
    recipes: [...state.recipes, newRecipe],
  }))
  setRecipes: (recipes) => set({ recipes })

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


  // Action to add a recipe to favorites
  addFavorite: (recipeId) => set((state) => ({
    favorites: [...state.favorites, recipeId],
  })),

  // Action to remove a recipe from favorites
  removeFavorite: (recipeId) => set((state) => ({
    favorites: state.favorites.filter((id) => id !== recipeId),
  })),

  // Generate recommendations based on favorites
  generateRecommendations: () => set((state) => {
    const recommended = state.recipes.filter(
      (recipe) => state.favorites.includes(recipe.id) && Math.random() > 0.5
    );
    return { recommendations: recommended };
  }),

}));


