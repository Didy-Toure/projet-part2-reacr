import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { addFavoris, removeFavoris } from '../../actions/favoris';

const ButtonFav = ({ id }) => {
    const dispatch = useDispatch();
    const favoris = useSelector((state) => state.favoris);

    const handleAddFavoris = () => {
        dispatch(addFavoris(id));
    }

    const handleRemoveFavoris = () => {
        dispatch(removeFavoris(id));
    }

    return (
        <div>
            {favoris.includes(id) ? (
                <button onClick={handleRemoveFavoris}>Enlever des favoris</button>
            ) : (
                <button onClick={handleAddFavoris}>Ajouter aux favoris</button>
            )}
        </div>
    );
}

export default ButtonFav;

