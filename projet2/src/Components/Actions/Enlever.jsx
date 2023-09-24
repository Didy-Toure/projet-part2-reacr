import { connect } from 'react-redux';
import { removeFavoris } from '../../store-actions/favoris';

const mapDispatchToProps = {
    removeFavoris: removeFavoris, // Utilisez une clé "removeFavoris" pour définir l'action.
};

const Enlever = ({ id, removeFavoris }) => {
    const handleRemoveFavoris = () => {
        removeFavoris(id);
    }

    return (
        <div>
            <button onClick={handleRemoveFavoris}>Enlever des favoris</button>
        </div>
    );
}

export default connect(null, mapDispatchToProps)(Enlever);