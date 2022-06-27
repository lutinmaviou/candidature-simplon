import React, { useEffect } from 'react';
import './Subnav.css';
import { NavLink } from 'react-router-dom';
import subnavScroll from '../../../gsap/subnavScroll';

const Subnav = () => {
  useEffect(() => {
    subnavScroll();
  }, []);

  return (
    <div className="subnav-container">
      <nav className="career-subnav">
        <NavLink to="/autodidacte/ce-que-j'ai-appris" className="career-subnav_item">
          Ce que j'ai appris
        </NavLink>
        <NavLink to="/autodidacte/comment-j'ai-appris" className="career-subnav_item">
          Comment j'ai appris
        </NavLink>
      </nav>
    </div>
  );
};

export default Subnav;
