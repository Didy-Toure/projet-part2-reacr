import { connect } from 'react-redux';
import React from 'react';
import { removeFavorite } from './FavoritesReducer';


const mapDispatchToProps = {
    removeFavorite: removeFavorite, 
};

const Enlever = ({ id, removeFavorite }) => {
    const handleRemoveFavoris = () => {
        removeFavorite(id);
    }

    return (
        <div>
            <button onClick={handleRemoveFavoris}>Enlever des favoris</button>
        </div>
    );
}

export default connect(null, mapDispatchToProps)(Enlever);