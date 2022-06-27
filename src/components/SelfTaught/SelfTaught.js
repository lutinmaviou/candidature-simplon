import React from 'react';
import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import './SelfTaught.css';
import Subnav from './Subnav/Subnav';

const SelfTaught = () => {
  let location = useLocation();
  useEffect(() => {
    console.log(location.pathname);
    console.log(document.querySelector('.toto'));
    if (location.pathname === `/autodidacte/comment-j'ai-appris`) {
      document.querySelector('.selfTaught-link a').style.color = 'black';
      document.querySelector('.selfTaught-link a').style.textShadow = '0.12vw 0.12vw 0.8vw white';
    }
  }, [location]);
  return (
    <>
      <Navbar />
      <div className="selftaught-container garamond">
        <h1>La suite de l'histoire</h1>
        <Subnav />
      </div>
      <Outlet />
    </>
  );
};

export default SelfTaught;
