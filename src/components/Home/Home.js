import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import fadeIn from '../../gsap/fadeIn';
import Card from './Card/Card';
import './Home.css';
import HomeParticles from './HomeParticles';

const Home = () => {
  useEffect(() => {
    displayLetters();
  }, []);

  useEffect(() => {
    const elt = document.querySelector('.cards-container');
    fadeIn(elt, 1, 2);
  }, []);

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
      <main className="cards-container owl">
        <Link to="/parcours/detail">
          <Card name="Parcours" />
        </Link>
        <Link to="/autodidacte/ce-que-j'ai-appris">
          <Card name="Autodidacte" />
        </Link>
        <Link to="/motivations">
          <Card name="Motivations" />
        </Link>
      </main>
    </>
  );
};

export default Home;
