import React from 'react';
import './HowLearned.css';
import MikeCodeur from '../../../assets/img/mike-codeur.jpg';
import Dyma from '../../../assets/img/dyma.png';
import Udemy from '../../../assets/img/udemy.jpg';
import BrunoSimon from '../../../assets/img/bruno-simon.png';
import ReedBarger from '../../../assets/img/reed-barger.jpeg';

const HowLearned = () => {
  return (
    <section className="howLearned-container garamond">
      <div className="formations">
        <h2>Formations</h2>
        <div className="flex-center formation-item card">
          <div className="formations-img">
            <img src={MikeCodeur} alt="Logo Mike Codeur" width="40%" />
          </div>
          <div className="mike-codeur formations-list">
            <h3>Mike Codeur</h3>
            <ul className="ressource-list">
              <li>React Js Entreprise</li>
              <li>Redux Starter</li>
              <li>Git Starter</li>
              <li>Serverless : Backend GraphQL</li>
              <li>Automated Tests Pro : TDD/BDD</li>
            </ul>
          </div>
        </div>
        <div className="flex-center formation-item card">
          <div className="formations-img">
            <img src={Dyma} alt="Logo Dyma" width="40%" />
          </div>
          <div className="dyma formations-list">
            <h3>Dyma</h3>
            <ul className="ressource-list">
              <li>Docker</li>
              <li>TypeScript</li>
              <li>Linux et Bash</li>
            </ul>
          </div>
        </div>
        <div className="flex-center formation-item card">
          <div className="formations-img">
            <img src={Udemy} alt="Logo Udemy" width="50%" />
          </div>
          <div className="udemy formations-list">
            <h3>Udemy</h3>
            <ul className="ressource-list">
              <li>React + Redux</li>
              <li>React Native</li>
              <li>UI/UX App Design</li>
              <li>Creative CSS</li>
              <li>Illustrator</li>
              <li>Deep Learning</li>
            </ul>
          </div>
        </div>
        <div className="flex-center formation-item card">
          <div className="formations-img">
            <img src={BrunoSimon} alt="Logo Bruno Simon" width="50%" />
          </div>
          <div className="bruno-simon formations-list">
            <h3>Bruno Simon</h3>
            <ul className="ressource-list">
              <li>Three.js journey</li>
            </ul>
          </div>
        </div>
        <div className="flex-center formation-item card">
          <div className="formations-img">
            <img src={ReedBarger} alt="Photo Reed Barger" width="40%" />
          </div>
          <div className="reed-barger formations-list">
            <h3>Reed Barger</h3>
            <ul className="ressource-list">
              <li>Build YouTube with React/Redux/Prisma</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="tutos">
        <h2>Cours / tutoriels</h2>
        <ul className="tutos-list card">
          <li>OpenClassrooms</li>
          <li>GrafiKart</li>
          <li>Sébastien Code</li>
          <li>Lior Chamla</li>
          <li>Documentations</li>
        </ul>
      </div>
      <div className="books">
        <h2>Livres</h2>
        <ul className="books-list card">
          <li>Cal Newport : Deep Work</li>
          <li>Ernesto Leite : DevOps</li>
        </ul>
      </div>
      <div className="tech">
        <h2>Veille technologique</h2>
        <ul className="tech-list card">
          <li>Web / Google</li>
          <li>Medium</li>
          <li>LinkedIn</li>
          <li>...</li>
        </ul>
      </div>
    </section>
  );
};

export default HowLearned;
