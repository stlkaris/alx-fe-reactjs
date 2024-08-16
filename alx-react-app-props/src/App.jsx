import React from 'react'
import UserContext from './components/UserContext';
import ProfilePage from './components/ProfilePage';


const App = () => {
  const userData = { 
    name: "John Doe", 
    email: "john.doe@example.com",
    age: 30
 };

  return (
    <UserContext.Provider value={userData}>
      <ProfilePage />
  </UserContext.Provider>
  )
}

export default App;