import React, {useState } from 'react'
import SearchBar from './components-/SearchBar';
import UserProfile from './components-/UserProfile';
import  { getUserProfile} from './services/githubService'


    function App() {
      const [user, setUser] = useState(null)

      const handleSearch= async (username) => {
        try {
          const userData = await getUserProfile(username);
          setUser(userData);
        } catch (error) {
          console.error('Error fetching user data:', )
          setUser(null)
        }
      }

           return (
        <div className="App">
          <h1>GitHub User Search</h1>
          <SearchBar onSearch={handleSearch} />
          <UserProfile user={user} />
          {/* Placeholder for search functionality */}
        </div>
      );
    }
    
    export default App;
 
