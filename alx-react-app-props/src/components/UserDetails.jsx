import React, { useContext } from 'react';
import UserContext from './UserContext';

function UserDetails() {
const userData = useContext(UserContext) 
  return (
    <div>
      <p>Name: {userData.name}</p>
      <p>Email: {userData.email}</p>
      <p>Age: {userData.age}</p>
    </div>
  );
}

export default UserDetails;