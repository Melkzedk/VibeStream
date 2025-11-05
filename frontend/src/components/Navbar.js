import React from "react";

function Navbar() {
  return (
    <nav className="navbar">    
        <h1>My Application</h1>
        <ul className="nav-links">
            <li><a href="/">Home</a></li>
            <li><a a href="/">Account Settings</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/about">About</a></li> 
            <li><a href="/contact">Contact</a></li>
        </ul>
    </nav>
  );
}

export default Navbar;