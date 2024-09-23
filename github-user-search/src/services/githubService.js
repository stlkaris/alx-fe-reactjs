import axios from 'axios';

const GITHUB_SEARCH_API_URL = 'https://api.github.com/search/users?q=';

  export const fetchUserData = async (username) => {
    try {
      const response = await axios.get(`${GITHUB_API_URL}${username}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching GitHub user:', error);
      throw error; // We will handle this error in the component
    }
  };

export const fetchAdvancedUserData = async (username) => {
  let query = username? `${username} in:login`: '';

  if (location) {
    query += `location:${location}`
  }
  if (minRepos) {
    query += `repos:>=${minRepos}`
  }

  const response = await axios.get(`${GITHUB_SEARCH_API_URL}${query}`)
  return response.data
  
};