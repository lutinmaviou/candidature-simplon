import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="owl">
      <ul>
        <li>
          <Link to="/">Accueil</Link>
        </li>
        <li>
          <Link to="/profile/parcours">Parcours</Link>
        </li>
        <li>
          <Link to="/profile/autodidacte">Autodidacte</Link>
        </li>
        <li>
          <Link to="/profile/motivations">Motivations</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
