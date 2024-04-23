import React, { useState } from 'react';
import axios from 'axios';

const SearchComponent = ({ onSearch }) => {
  const [username, setUsername] = useState('');

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `https://api.github.com/users/${username}/repos`
      );
      onSearch(response.data);
    } catch (error) {
      console.error('Error fetching repositories:', error);
    }
  };

  return (
    <div className="container mt-4">
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter GitHub username"
        />
        <button className="btn btn-primary" onClick={handleSearch}>
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchComponent;
