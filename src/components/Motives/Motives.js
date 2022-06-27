import React from 'react';
import Navbar from '../Navbar/Navbar';
import './Motives.css';

const Motives = () => {
  return (
    <>
      <Navbar />
      <div className="motives-container garamond">
        <h1>Mes motivations</h1>
        <div className="motives-wrapper">
          <div className="motives">
            <p>
              Aujourd’hui complètement autodidacte, je me rends compte que les difficultés
              que je rencontre pour évoluer comme développeur à un niveau professionnel
              sont essentiellement liées à mon manque d’expérience en entreprise.<br></br>
              <br></br>C’est ce que j’entends au cours des entretiens que je passe depuis
              maintenant 2 ans.
              <br></br>
              <br></br>C'est pourquoi je souhaite suivre une alternance avec un programme
              spécialisé afin d’acquérir cette expérience en équipe sur des bases solides,
              et dans un environnement <strong>DevOps</strong>.<br></br>
              <br></br>La formation{' '}
              <strong>Concepteur Développeur d’applications DevOps</strong> de niveau
              Bac+3 que vous proposez correspond tout à fait à mes attentes :<br></br>
              <br></br>Avec l’alternance, elle me permettrait de pouvoir enfin lancer ma
              nouvelle carrière, de consolider mes acquis et évoluer en entreprise, d’y
              apprendre de nouvelles choses ainsi que dans un contexte éducatif grâce à
              l’école.{' '}
            </p>
            <h2>Mes prédispositions :</h2>
            <p>
              De nature agréable, les 20 années passées dans la restauration m’ont
              beaucoup apporté en termes de travail en équipe, disponibilité,
              adaptabilité, bienveillance et réactivité.<br></br>
              <br></br>Mon implication, ma curiosité et ma motivation font que je suis
              partie prenante de la vie de l’entreprise pour laquelle je m’investis.
              <br></br>
              <br></br>Côté technique, je me situe comme un développeur orienté{' '}
              <strong>full stack </strong>
              même si mon appétence va naturellement vers le <strong>front end</strong> :
              je passe beaucoup de temps sur le design et les animations.<br></br>
              <br></br>Mon package est assez large et complet concernant une application
              web, à savoir se soucier du référencement, de l’accessibilité, de l’UX/UI,
              de la compatibilité entre les différents navigateurs, de la sécurité, des
              performances, fournir une documentation si nécessaire, mais aussi écrire un
              code propre, lisible, maintenable et réutilisable, utiliser les bonnes
              pratiques en pensant à l’équipe qui lira ce code.{' '}
            </p>
            <h2>Mes attentes :</h2>
            <p>
              Je souhaite aujourd’hui intégrer une équipe de collaborateurs, travailler
              sur des projets valorisants, et surtout me spécialiser au développement dans
              un environnement DevOps, avec toutes les techniques que cela implique.
              <br></br>
              <br></br>Voici une liste des sujets et technos que j’aimerais aborder :
            </p>
            <ul>
              <li>Docker</li>
              <li>Kubernetes</li>
              <li>Jenkins</li>
              <li>Microsoft Azure</li>
              <li>Ansible</li>
              <li>CI/CD</li>
              <li>GitLab</li>
              <li>Tests automatisés</li>
              <li>Méthodologie Agile (Scrum, Kanban)</li>
              <li>Microservices</li>
              <li>Développer des applications web/mobile/desktop</li>
              <li>...</li>
            </ul>
            <p>
              Cette liste n’étant pas exhaustive, elle s’étend avec tous les points cités
              dans le programme détaillé de la formation, dans la section{' '}
              <a
                href="https://simplon.co/session/concepteur-rice-developpeur-se-en-environnement-devops-3/861/#skills"
                target="_blank"
              >
                <strong>Compétences visées</strong>
              </a>
              .<br></br>
              <br></br>
              La veille technologique fait partie de mon quotidien, apprendre est pour moi
              quelque chose de passionnant. Conscient que le marché évolue rapidement, je
              m’adapte assez facilement aux changements et nouveautés.
              <br></br>
              <br></br>
              Mes acquis étant largement perfectibles, je compte aussi sur un bon
              encadrement et des <strong>revues de codes </strong>qui font progresser, mon
              but étant d’être un collaborateur opérationnel, sérieux et fiable.
            </p>
            <h2>Mon futur :</h2>
            <p>
              Au terme de cette formation, je vois mon avenir au sein d’ une entreprise et
              une équipe solide qui travaille sur des projets réguliers, comme des sites
              web et des applications mobiles, ou d’autres projets de plus grande
              envergure et sur du plus long terme.<br></br>
              <br></br>
              L’objectif est de pouvoir apporter mon expertise et mon expérience de DevOps
              afin de faciliter la vie de chaque projet de sa naissance à sa livraison,
              avec l’assurance de sa fiabilité dans le temps.<br></br>
              <br></br>
              Ayant la possibilité d’avoir une belle carrière qui se profile devant moi,
              je souhaite plus tard être Chef de Projet, CEO/CTO ou PDG d’une
              agence/entreprise, voire freelance spécialisé DevOps.<br></br>
              <br></br>
            </p>
            <p className="enjoy-working">
              <strong>
                Dans tous les cas, je veux me consacrer exclusivement à ma passion et en
                vivre !
              </strong>{' '}
            </p>
            <br></br>
            <p>Merci de m’avoir lu.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Motives;
