export const addFavorite = (recipeId) => {
    return {
        type: 'ADD_FAVORIS',
        payload: recipeId,
    };
}

export const removeFavorite = (recipeId) => {
    return {
        type: 'REMOVE_FAVORIS',
        payload: recipeId,
    };
}

//la fonction pour verifier que la recette est dans les favoris

export const isRecipeInFavorites = (recipeId, favorites) => {
    return favorites.includes(recipeId);
}

