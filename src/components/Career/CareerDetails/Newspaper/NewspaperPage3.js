import React from 'react';
import './NewspaperPage.css';
import Paper from '../../../../assets/img/old-paper.png';
import Header from './Header/Header';
import RightFinger from '../../../../assets/img/finger-right.png';

const NewspaperPage3 = (props) => {
  const previousPage = () => {
    const previousPageNb = props.pageNb - 1;
    const previousPage = document.querySelector(`.page-${previousPageNb}`);
    previousPage.style.animationPlayState = 'paused';
    previousPage.style.display = 'block';
  };

  return (
    <div className={`newspaper-wrapper page-${props.pageNb} old-newspaper`}>
      <img src={Paper} alt="Vieux journal" className="paper" />
      <Header />
      <article id="skills-text">
        <h3 className="content-h3 underline">Annexe :</h3>
        <h3 className="content-subtitle">Compétences développées</h3>
        <div className="skills-container flex-around">
          <div className="restau-skills">
            <h4>Restauration</h4>
            <ul className="skills-list_restau list flex-between">
              <li className="skills-list_item">Travail en équipe</li>
              <li className="skills-list_item">Management</li>
              <li className="skills-list_item">Organisation</li>
              <li className="skills-list_item">Réactivité</li>
              <li className="skills-list_item">Serviabilité</li>
              <li className="skills-list_item">Ouverture d'esprit</li>
              <li className="skills-list_item">Amabilité</li>
              <li className="skills-list_item">Rapidité</li>
              <li className="skills-list_item">Adaptabilité</li>
              <li className="skills-list_item">...</li>
            </ul>
          </div>
          <div className="separator"></div>
          <div className="code-skills">
            <h4>OpenClassrooms</h4>
            <ul className="skills-list_code list flex-between">
              <li className="skills-list_item">Logique algorithmique</li>
              <li className="skills-list_item">
                Langages de programmation (HTML/CSS/JS/PHP)
              </li>
              <li className="skills-list_item">Accessibilité</li>
              <li className="skills-list_item">SEO</li>
              <li className="skills-list_item">Git/GitHub</li>
              <li className="skills-list_item">Responsive Design</li>
              <li className="skills-list_item">W3C</li>
              <li className="skills-list_item">...</li>
            </ul>
          </div>
        </div>
      </article>
      <img
        src={RightFinger}
        alt="Doigt pointant vers la gauche"
        className=" 
          left-finger_page3"
        onClick={previousPage}
      />
    </div>
  );
};

export default NewspaperPage3;
