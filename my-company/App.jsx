import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Service from './Services'
import Contact from './Contact'
import Navbar from './Navbar'
import Footer from './Footer'


const App = () => {
  return (
 <Router>
    <div>
      <Navbar />
        <Routes>
            <Route path = "/">{<Home />}</Route>
            <Route path = "/about" >{<About />}</Route>
            <Route path = "/services">{<Service />}</Route>
            <Route path ="/contact">{<Contact />}</Route>
        </Routes>
      <Footer />
    </div>
</Router>
  );

}

export default App
