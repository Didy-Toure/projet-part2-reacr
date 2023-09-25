import React from 'react';
import { connect } from 'react-redux';
import { addFavorite, removeFavorite, isRecipeInFavorites } from '../../store-actions/favoris.jsx';


const Ajout = ({ id, favoris, addFavorite, removeFavorite }) => {
  const isRecipeInFavoritesFlag = isRecipeInFavorites(id, favoris);

  const handleToggleFavorite = () => {
    if (isRecipeInFavoritesFlag) {
      removeFavorite(id);
    } else {
      addFavorite(id);
    }
  };

  return (
    <div>
      <button onClick={handleToggleFavorite}>
        {isRecipeInFavoritesFlag ? 'Enlever des favoris' : 'Ajouter aux favoris'}
      </button>
    </div>
  );
};


const mapStateToProps = (state) => ({
  favoris: state.favoris,
});

export default connect(mapStateToProps, { addFavorite, removeFavorite })(Ajout);
