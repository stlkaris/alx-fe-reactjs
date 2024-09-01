import React from 'react'
import { useParams } from 'react-router-dom'

const User = () => {
    const {userId} = useParams();

  return (
    <div>
      <h1>User Profile</h1>
      <p>Displaying information for user: {userId}</p>
    </div>
  )
}

export default User
