import React, { useEffect } from 'react';
import fadeIn from '../../../gsap/fadeIn';
import './CareerDetails.css';
import NewspaperPage1 from './Newspaper/NewspaperPage1';
import NewspaperPage2 from './Newspaper/NewspaperPage2';
import NewspaperPage3 from './Newspaper/NewspaperPage3';

const Restauration = () => {
  useEffect(() => {
    const elt = document.querySelector('.newspaper-container');
    fadeIn(elt, 2, 0.5);
  }, []);
  
  return (
    <section className="story-container">
      <div className="newspaper-container flex-center">
        <NewspaperPage3 pageNb="3" lastPage="true" />
        <NewspaperPage2 pageNb="2" />
        <NewspaperPage1 pageNb="1" firstPage="true" />
      </div>
    </section>
  );
};

export default Restauration;
