import React, { useState, useEffect } from 'react';
import FavoritesListComponent from '../components/FavoritesListCompoonent/FavoritesListCompoonent';

const FavoritesPage = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites'));
    if (storedFavorites) {
      setFavorites(storedFavorites);
    }
  }, []);

  const removeFromFavorites = (repoToRemove) => {
    const updatedFavorites = favorites.filter(
      (fav) => fav.id !== repoToRemove.id
    );
    setFavorites(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };

  return (
    <div className="container">
      <h2>Favorites</h2>
      <div className="row">
        <div className="col-md-6">
          <FavoritesListComponent
            favorites={favorites}
            removeFromFavorites={removeFromFavorites}
          />
        </div>
      </div>
    </div>
  );
};

export default FavoritesPage;
