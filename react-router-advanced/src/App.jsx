import React from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Dashbord from './components/Dashbord'
import Profile from "./components/Profile";
import User from "./components/User";
import BlogPost from "./components/BlogPost";
import ProtectedRoute from './components/ProtectedRoute'
import Login from "./components/Login";
import { AuthProvider } from "./auth";

function App () {
  return (
    <AuthProvider>
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" elemt={<About />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path="/dashbord/*" element={<ProtectedRoute><Dashbord /></ProtectedRoute>}></Route>
        <Route path="/profile/*" element={<ProtectedRoute><Profile /></ProtectedRoute>}></Route>
        <Route path='/user/:id' element={<User />}></Route>
        <Route path="/blog/:id" element={<BlogPost />}></Route>
        </Routes>
    </Router>
  </AuthProvider>
  )
}

export default App