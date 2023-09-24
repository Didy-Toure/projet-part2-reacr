import { connect } from 'react-redux';
import { addFavoris, removeFavoris } from '../../store-actions/favoris';

const Ajout = ({ addFavoris, removeFavoris, id, favoris }) => {
  const isRecipeInFavorites = favoris.includes(id);

  const handleToggleFavorite = () => {
    if (isRecipeInFavorites) {
      // Si la recette est dans les favoris, la supprimer
      removeFavoris(id);
    } else {
      // Sinon, l'ajouter aux favoris
      addFavoris(id);
    }
  };

  return (
    <div>
      <button onClick={handleToggleFavorite}>
        {isRecipeInFavorites ? 'Enlever des favoris' : 'Ajouter aux favoris'}
      </button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  favoris: state.favoris, // Assurez-vous que le nom "favoris" correspond à votre slice de favoris
});

export default connect(mapStateToProps, { addFavoris, removeFavoris })(Ajout);






