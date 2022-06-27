import React from 'react';
import { useEffect } from 'react';
import learnedPageAnim from '../../../gsap/learnedPageAnim';
import './Learned.css';

const Learned = () => {
  useEffect(() => {
    learnedPageAnim();
  }, []);
  return (
    <section className="learned-container flex-col garamond">
      <div className="learned-wrapper flex">
        <div className="learned-text text-2020">
          {' '}
          <p>
            Nouveau diplôme en main, me voilà parti pour une nouvelle carrière dans le
            numérique.<br></br>
            <br></br>Nous sommes en 2020 et je recherche un emploi en CDI, qui me
            permettrait de pouvoir faire mes premières armes au sein d’une équipe de
            développeurs plus expérimentés.<br></br>
            <br></br>Malheureusement et confinement aidant, je ne parviens pas à décrocher
            le job de mes rêves.<br></br>
            <br></br>C’est alors en juin de la même année que je crée mon activité
            freelance, m’inscris sur <strong>Malt</strong> ainsi que d’autres
            plateformes du même genre, et peaufine mon profil{' '}
            <strong>
              <a
                href="https://www.linkedin.com/in/bertrandbourion/"
                target="blank"
                className="orange-link"
              >
                LinkedIn
              </a>
            </strong>
            .<br></br>
            <br></br>
            En parallèle de ma recherche d'une première mission, je continue de me former
            en autodidacte, et décide de me spécialiser comme développeur "full
            JavaScript", avec la bibliothèque React et le framework Next.js.<br></br>
            <br></br>Je travaille également les animations avec Gsap et les changements de
            pages avec Framer Motion.
          </p>
        </div>
        <div className="learned-date date-2020 flex-col">2020</div>
      </div>
      <div className="learned-wrapper flex-around">
        <div className="learned-date date-2021 flex-col">2021</div>
        <div className="learned-text text-2021">
          <p>
            En février 2021, je parviens finalement à trouver mon premier client avec qui
            je travaillerai pendant 3 mois.<br></br>
            <br></br>Cette expérience m’aura beaucoup apporté quant au statut
            d’auto-entrepreneur.<br></br>
            <br></br>J’aurai produit pour lui plusieurs emails en HTML4/5, des eADV dans
            le domaine de la médecine, et une campagne publicitaire (bannières animées sur
            le web, intégration avec Photoshop) pour un laboratoire de renommée internationale.<br></br>
            <br></br>Ma formation continue ensuite, je perfectionne le BackEnd et la gestion de
            bases de données (MongoDB principalement), les formulaires, la sécurité, et
            m'intéresse de plus en plus au <strong>DevOps</strong>.
          </p>
        </div>
      </div>
      <div className="learned-wrapper flex-around">
        <div className="learned-text text-2022">
          <p>
            Constamment en veille technologique à me tenir au courant de l’actualité de
            notre monde numérique, je pense sérieusement à devenir un développeur DevOps,
            et me consacre à ce sujet.<br></br>
            <br></br>Je visionne des vidéos sur Docker, Linux, me renseigne sur les tests,
            l’automatisation, le pipeline CI/CD et décide de chercher une école pour faire
            une alternance dans ce domaine.
          </p>
        </div>
        <div className="learned-date date-2022 flex-col">2022</div>
      </div>
    </section>
  );
};

export default Learned;
