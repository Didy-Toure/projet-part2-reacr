import favoritesSlice from "../Components/Actions/FavoritesReducer.jsx"
import {configureStore} from '@reduxjs/toolkit';


const store = configureStore({
    reducer: {
        favorites: favoritesSlice,
    },

});

export default store;