import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {Link} from 'react-router-dom';
import { removeFavorite } from "./FavoritesReducer";
import { Button } from "react-bootstrap";


const FavorisList = () => {
  const favoris = useSelector((state) => state.favorites);
  const dispatch = useDispatch();

    const handleRemoveFavorite = (recipeId) => {
        dispatch(removeFavorite(recipeId));
    };

  return (
    <div>
      <h1>Recettes en Favoris</h1>
      <ul>
        {favoris.map((recipeId) => (
          <li key={recipeId}>
            {/* */}
            <Button>
            <Link to={`/favoris/${recipeId}`}>Voir les détails</Link>

            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FavorisList;
