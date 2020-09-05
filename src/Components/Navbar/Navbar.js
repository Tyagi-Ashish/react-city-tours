import React from 'react';
import './navbar.scss';

export default function Navbar() {
  return (
    <nav className="navBar">
      <img src="https://via.placeholder.com/50" alt="logo"/>
      <ul className="nav-links">
          <li><a href="/" className="nav-link">home</a></li>
          <li><a href="/" className="nav-link">about</a></li>
          <li><a href="/" className="nav-link active">tours</a></li>
      </ul>
    </nav>
  );
}
