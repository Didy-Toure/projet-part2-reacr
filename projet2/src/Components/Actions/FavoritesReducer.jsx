const reducers = {
    addFavorite: (state, action) => {
        return [...state, action.payload];
    },
    removeFavorite: (state, action) => {
        return state.filter((id) => id !== action.payload);
    }

}

export default reducers;
