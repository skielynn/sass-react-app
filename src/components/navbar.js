import React from 'react';
import '../sass/styles.scss';


const Navbar = () => {
    return (
      <nav className="navbar">
        <ul className="navbar_menu">
          <li className="navbar_item"><a href="#" className="navbar_link">Home</a></li>
          <li className="navbar_item"><a href="#" className="navbar_link">About</a></li>
          <li className="navbar_item"><a href="#" className="navbar_link">Services</a></li>
          <li className="navbar_item"><a href="#" className="navbar_link">Contact</a></li>
        </ul>
      </nav>
    );
  }
  
  export default Navbar;

  
  
  
  
  
  