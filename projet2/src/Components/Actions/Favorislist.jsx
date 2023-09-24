import React from "react";
import { useSelector } from "react-redux";

const FavorisList = () => {
  const favoris = useSelector((state) => state.favoris);

  return (
    <div>
      <h1>Recettes en Favoris</h1>
      <ul>
        {favoris.map((recipeId) => (
          <li key={recipeId}>
            {/* Vous pouvez créer des liens vers les détails de chaque recette en favoris */}
            <a href={`/favoris/${recipeId}`}>Voir les détails</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FavorisList;
