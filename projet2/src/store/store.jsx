import favoritesReducer from "../Components/Actions/FavoritesReducer.jsx"
import {configureStore} from '@reduxjs/toolkit';

export default configureStore({
    reducer: {
        favorites: favoritesReducer,
    },

});
