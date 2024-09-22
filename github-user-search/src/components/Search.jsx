// src/components/Search.jsx
import React, { useState } from 'react';
import { fetchAdvancedUserData } from '../services/githubService'; // Import the fetchUserData function

const Search = () => {
  const [username, setUsername] = useState('');
  const [location, setLocation] = useState('')
  const [minRepos, setMinRepos ] = useState('')
  const [users, setUsers] = useState([]); // Track user data
  const [loading, setLoading] = useState(false); // Track loading status
  const [error, setError] = useState(''); // Track error messages

  const handleSearch = async (e) => {
    e.preventDefault(); // Prevent form from refreshing the page
    setLoading(true);
    setError('');
    setUsers(null); // Clear previous search data

    if (!users) {
        return <div>Looks like we cant find the user.</div>
    }
    try {
      const usersData = await fetchAdvancedUserData(username); // Use fetchUserData to get data
      setUsers(usersData); // Store user data in state
    } catch (err) {
      setError('Looks like we can’t find the user.');
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">GitHub Advanced User Search</h1>
      <form className="space-y-4" onSubmit={handleSearch}>
        <div>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="GitHub username"
            className="border border-gray-300 p-2 w-full"
          />
        </div>
        <div>
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Location"
            className="border border-gray-300 p-2 w-full"
          />
        </div>
        <div>
          <input
            type="number"
            value={minRepos}
            onChange={(e) => setMinRepos(e.target.value)}
            placeholder="Minimum Repositories"
            className="border border-gray-300 p-2 w-full"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 w-full rounded"
        >
          Search
        </button>
      </form>

      {loading && <p className="text-center mt-4">Loading...</p>}
      {error && <p className="text-red-500 text-center mt-4">{error}</p>}

      <div className="mt-6 space-y-4">
        {users.length > 0 && users.map(user => (
          <div key={user.id} className="p-4 border border-gray-200 rounded">
            <h2 className="font-bold">{user.login}</h2>
            <p>Location: {user.location || 'N/A'}</p>
            <p>Repositories: {user.public_repos}</p>
            <a href={user.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-500">
              View Profile
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;

