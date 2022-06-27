import React from 'react';
import './Career.css';
import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';

const Career = () => {
  return (
    <>
      <Navbar />
      <div className="career-container garamond">
        <h1>La petite histoire</h1>
      </div>
      <Outlet />
    </>
  );
};

export default Career;
