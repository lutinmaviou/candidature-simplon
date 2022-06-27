import Paper from '../../../../assets/img/old-paper.png';
import Header from './Header/Header';
import Diploma from '../../../../assets/img/diploma.png';
import LeftFinger from '../../../../assets/img/finger-left.png';

const NewspaperPage1 = (props) => {
  const nextPage = () => {
    const currentPage = document.querySelector('.page-1');
    currentPage.style.animationPlayState = 'running';
    setTimeout(() => {
      currentPage.style.display = 'none';
    }, 700);
  };

  return (
    <div className={`newspaper-wrapper page-${props.pageNb} old-newspaper page`}>
      <img src={Paper} alt="Vieux journal" className="paper" />
      <Header />
      <article id="bac-text">
        <h3 className="content-h3">Juin 1997 : le début d'une carrière</h3>
        <p>
          <img src={Diploma} alt="Diplôme baccalauréat" id="diploma" />
          <span>
            <span>C</span>
          </span>
          <span>'est le départ !</span> Après avoir étudié au lycée technologique hôtelier
          de Gerardmer (Vosges), puis celui de Toulouse, Bertrand obtient son
          baccalauréat.
          <br />
          Il va s'orienter vers un parcours saisonnier et exercer son métier de serveur à
          travers différents postes et destinations (océan, montagne, île de la Réunion,
          Suisse...).
          <br />
          Pleinement enrichi d'une expérience humaine et professionnelle d'une vingtaine
          d'années, il décide ensuite de se consacrer à une activité qui le captive de
          plus en plus...
        </p>
      </article>
      <img
        src={LeftFinger}
        alt="Doigt pointant vers la droite"
        className="right-finger_page1"
        onClick={nextPage}
      />
    </div>
  );
};

export default NewspaperPage1;
