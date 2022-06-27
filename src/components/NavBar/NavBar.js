import React from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="main-nav owl">
      <ul>
        <li>
          <NavLink to="/">Accueil</NavLink>
        </li>
        <li>
          <NavLink to="/parcours/detail">Parcours</NavLink>
        </li>
        <li className="selfTaught-link">
          <NavLink to="/autodidacte/ce-que-j'ai-appris">Autodidacte</NavLink>
        </li>
        <li>
          <NavLink to="/motivations">Motivations</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
