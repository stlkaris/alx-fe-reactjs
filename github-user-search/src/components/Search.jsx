// src/components/Search.jsx
import React, { useState } from 'react';
import { fetchUserData } from '../services/githubService'; // Import the fetchUserData function

const Search = () => {
  const [username, setUsername] = useState(''); // Track input value
  const [user, setUser] = useState(null); // Track user data
  const [loading, setLoading] = useState(false); // Track loading status
  const [error, setError] = useState(''); // Track error messages

  const handleSearch = async (e) => {
    e.preventDefault(); // Prevent form from refreshing the page
    setLoading(true);
    setError('');
    setUser(null); // Clear previous search data

    try {
      const userData = await fetchUserData(username); // Use fetchUserData to get data
      setUser(userData); // Store user data in state
    } catch (err) {
      setError('Looks like we can’t find the user.');
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter GitHub username"
        />
        <button type="submit">Search</button>
      </form>

      {/* Display loading message */}
      {loading && <p>Loading...</p>}

      {/* Display error message */}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      {/* Display user data if available */}
      {user && (
        <div>
          <h2>{user.name || user.login}</h2>
          <img src={user.avatar_url} alt={user.login} width="150" />
          <p><strong>Username:</strong> {user.login}</p>
          {user.bio && <p><strong>Bio:</strong> {user.bio}</p>}
          <a href={user.html_url} target="_blank" rel="noopener noreferrer">
            Visit GitHub Profile
          </a>
        </div>
      )}
    </div>
  );
};

export default Search;

