import React from 'react'
import { Navigate } from 'react-router-dom'
import auth from '../auth'

const ProtectedRoute = ({children}) => {
  return auth.isAuthenticated? children  : <Navigate to='/login' />
}

export default ProtectedRoute
