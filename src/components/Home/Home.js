import React, { useEffect } from 'react';
import fadeIn from '../../gsap/fadeIn';
import Card from './Card/Card';
import './Home.css';
import HomeParticles from './HomeParticles';

const Home = () => {
  useEffect(() => {
    return () => {
      displayLetters();
    };
  }, []);

  useEffect(() => {
    fadeIn();
  });

  const displayLetters = () => {
    const title = document.querySelector('.home-title');
    const letters = title.textContent.split('');
    let i = 0;
    let newText = '';
    setTimeout(() => {
      let x = setInterval(() => {
        title.style.visibility = 'visible';
        if (i < letters.length) {
          i++;
          newText += letters[i - 1];
          title.innerHTML = newText;
        } else {
          clearInterval(x);
        }
      }, 100);
    }, 300);
  };

  return (
    <>
      <HomeParticles />
      <h1 className="home-title space">Hello Simplon!</h1>
      <main className="cards-container fred">
        <Card name="Parcours" />
        <Card name="Autodidacte" />
        <Card name="Motivations" />
      </main>
    </>
  );
};

export default Home;
