import React from 'react';

const FavoritesListComponent = ({ favorites, removeFromFavorites }) => {
  const handleClick = (link) => {
    window.open(link, '_blank');
  };
  return (
    <div className="card">
      <ul className="list-group list-group-flush">
        {favorites.map((repo) => (
          <li key={repo.id} className="list-group-item hover">
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <h5 className="mb-0">{repo.name}</h5>
                <p className="mb-0">{repo.description}</p>
              </div>
              <div>
                <button
                  className="btn btn-dark mx-3"
                  onClick={() => handleClick(repo.html_url)}
                >
                  Open
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => removeFromFavorites(repo)}
                >
                  Remove
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default FavoritesListComponent;
