import React from 'react';
import './NewspaperPage.css';
import Paper from '../../../../assets/img/old-paper.png';
import Header from './Header/Header';
import LeftFinger from '../../../../assets/img/finger-left.png';
import RightFinger from '../../../../assets/img/finger-right.png';
import OC from '../../../../assets/img/oc-logo.png';
import Smiley from '../../../../assets/img/smiley-blink.png';

const NewspaperPage2 = (props) => {
  const previousPage = () => {
    const previousPageNb = props.pageNb - 1;
    const previousPage = document.querySelector(`.page-${previousPageNb}`);
    previousPage.style.animationPlayState = 'paused';
    previousPage.style.display = 'block';
  };

  const nextPage = () => {
    const currentPage = document.querySelector('.page-2');
    currentPage.style.animationPlayState = 'running';
    setTimeout(() => {
      currentPage.style.display = 'none';
    }, 700);
  };

  return (
    <div className={`newspaper-wrapper page-${props.pageNb} old-newspaper`}>
      <img src={Paper} alt="Vieux journal" className="paper" />
      <Header />
      <img src={OC} alt="Logo OpenClassrooms" id="oc" />
      <article id="change-text">
        <h3 className="content-h3">2019 : L'année du changement</h3>
        <div className="flex-col">
          <p className="">
            Artiste dans l'âme, passionné de créations en tout genre, il va choisir le
            développement web comme reconversion professionnelle.
          </p>
          <div className="flex">
            <p>
              C'est grâce à l'école <span className="bold">OpenClassrooms</span>, via une
              formation à distance avec un mentor, qu'il va obtenir son diplôme de
              Développeur Web en mai 2020, et se consacrer à sa nouvelle activité.
            </p>
          </div>
          <p className="text-center">
            Chaque jour (ou presque &nbsp; <img src={Smiley} id="smiley-blink" />) devant
            l'ordinateur, sa curiosité et son assiduité récompensent ses efforts.
          </p>
        </div>
      </article>

      <div className="fingers-container fcp2 flex-between">
        <img
          src={RightFinger}
          alt="Doigt pointant vers la droite"
          className="left-finger"
          onClick={previousPage}
        />
        <img
          src={LeftFinger}
          alt="Doigt pointant vers la gauche"
          className=" right-finger_page2"
          onClick={nextPage}
        />
      </div>
    </div>
  );
};

export default NewspaperPage2;
