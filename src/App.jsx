import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import SearchComponent from './components/SearchComponent/SearchComponent';
import RepositoryListComponent from './components/RepositoryListComponent/RepositoryListComponent';
import AboutPage from './pages/about';
import FavoritesPage from './pages/favorites';

const App = () => {
  const [repositories, setRepositories] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = (data) => {
    setLoading(true);
    setRepositories(data);

    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <Router>
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
          <div className="container-fluid">
            <Link className="navbar-brand text-white mx-5" to="/">
              <img
                src="https://icon-library.com/images/github-icon-white/github-icon-white-6.jpg"
                width="40"
                height="40"
                alt="github icon"
              />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              onClick={toggleNav}
              aria-controls="navbarSupportedContent"
              aria-expanded={isNavOpen ? 'true' : 'false'}
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className={
                'collapse navbar-collapse' + (isNavOpen ? ' show' : '')
              }
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link
                    className="nav-link text-white"
                    aria-current="page"
                    to="/"
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white" to="/favorites">
                    Favorites
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white" to="/about">
                    About
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                repositories={repositories}
                handleSearch={handleSearch}
                loading={loading}
              />
            }
          />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
        </Routes>
      </div>
    </Router>
  );
};

const Home = ({ repositories, handleSearch, loading }) => (
  <div className="d-flex w-100 justify-content-around">
    <div
      className="d-flex flex-column justify-content-center align-items-center"
      style={{ width: '350px' }}
    >
      <h1>GitHub Repo Viewer</h1>
      <SearchComponent onSearch={handleSearch} />
    </div>
    {loading ? (
      <div
        style={{
          width: '400px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'flex-end',
        }}
      >
        <div class="spinner-border" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
    ) : (
      <>
        {repositories.length === 0 ? (
          <span
            className="fw-lighter"
            style={{
              width: '400px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'flex-end',
            }}
          >
            No repositories found for this user.
          </span>
        ) : (
          <div
            className="overflow-y-scroll"
            style={{ maxHeight: '400px', width: '400px' }}
          >
            <RepositoryListComponent repositories={repositories} />
          </div>
        )}
      </>
    )}
  </div>
);

export default App;
