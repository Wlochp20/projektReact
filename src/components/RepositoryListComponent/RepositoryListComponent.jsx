import React, { useState, useEffect } from 'react';

const RepositoryListComponent = ({ repositories }) => {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now - date);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return `${diffDays} days ago`;
  };

  const [favorites, setFavorites] = useState([]);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    // Load favorites from local storage on component mount
    const storedFavorites = JSON.parse(localStorage.getItem('favorites'));
    if (storedFavorites) {
      setFavorites(storedFavorites);
    }
  }, []);

  const addToFavorites = (repo) => {
    if (!favorites.some((fav) => fav.id === repo.id)) {
      const updatedFavorites = [...favorites, repo];
      setFavorites(updatedFavorites);
      localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    }
  };

  const handleItemClick = (repo, event) => {
    if (
      !event.target.classList.contains('bi-star') &&
      !event.target.classList.contains('bi-star-fill')
    ) {
      window.open(repo.html_url, '_blank');
    }
  };

  const handleIconHover = (index) => {
    setHoveredIndex(index);
  };

  return (
    <div className="list-group">
      {repositories.map((repo, index) => (
        <div key={repo.id}>
          <div
            role="button"
            className="list-group-item list-group-item-action"
            onClick={() => handleItemClick(repo)}
          >
            <div className="d-flex w-100 justify-content-between">
              <h5 className="mb-1">{repo.name}</h5>
              <small className="text-body-secondary">
                {formatDate(repo.updated_at)}
              </small>
            </div>
            <p className="mb-1">{repo.description}</p>
            <small className="text-body-secondary">
              Language: {repo.language}
            </small>
            <div
              role="button"
              className="float-end"
              onMouseEnter={() => handleIconHover(index)}
              onMouseLeave={() => handleIconHover(null)}
            >
              <i
                onClick={() => addToFavorites(repo)}
                className={`bi ${
                  favorites.some((fav) => fav.id === repo.id) ||
                  hoveredIndex === index
                    ? 'bi-star-fill'
                    : 'bi-star'
                }`}
              ></i>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RepositoryListComponent;
