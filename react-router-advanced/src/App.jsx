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

function App () {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" elemt={<About />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path="/dashbord/*" element={<ProtectedRoute><Dashbord /></ProtectedRoute>}></Route>
        <Route path="/profile/*" element={<ProtectedRoute><Profile /></ProtectedRoute>}></Route>
        <Route path='/user/:userId' element={<User />}></Route>
        <Route path="/blog/:postId" element={<BlogPost />}></Route>
        </Routes>
    </Router>

  )
}

export default App