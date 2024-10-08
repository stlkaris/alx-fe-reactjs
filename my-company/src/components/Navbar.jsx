import React from 'react';
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
   <nav style={{padding: '10px', backgroundColor: '#090979', display: 'flex', justifyContent: 'center'}}>
    <Link to="/" style={{margin: '10px'}} >Home</Link>
    <Link to="/about" style={{margin: '10px'}}>About</Link>
    <Link to="/services" style={{margin: '10px'}}>Services</Link>
    <Link to="/contact" style={{margin: '10px'}}>Contact</Link>
   </nav>
  )
}

export default Navbar;
