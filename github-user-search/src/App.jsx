import './index.css'

import React, {useState } from 'react'

import Search from './components/Search';

import UserProfile from './components/UserProfile';
import  { fetchAdvancedUserData} from './services/githubService'


    function App() {
      const [user, setUser] = useState(null)

      const handleSearch= async (username) => {
        try {
          const userData = await fetchAdvancedUserData(username);
          setUser(userData);
        } catch (error) {
          console.error('Error fetching user data:', )
          setUser(null)
        }
      }

           return (
        <div className="App">
          <h1>GitHub User Search</h1>
          <Search onSearch={handleSearch} />
          <UserProfile user={user} />
          {/* Placeholder for search functionality */}
        </div>
      );
    }
    
    export default App;
 
