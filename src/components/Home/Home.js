import React, { useEffect } from 'react';
import './Home.css';
import HomeParticles from './HomeParticles';

const Home = () => {
  useEffect(() => {
    return () => {
      displayLetters();
    };
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
    </>
  );
};

export default Home;
