import './Header.css';
import Paparazzi from '../../../../../assets/img/paparazzi.png';
import LimitedEdition from '../../../../../assets/img/limited-edition.png';
import { getCurrentDate } from '../../../../../utils/getCurrentDate';

const Header = () => {
  return (
    <div className="header-container flex-col">
      <div className="header-pictures flex-around">
        <img src={Paparazzi} alt="Paparazzi" className="paparazzi-img" />
        <h2 className="title text-center louisa-cp">The Story</h2>
        <img src={LimitedEdition} alt="Edition limitée" className="limited-img" />
      </div>

      <div className="headband flex-between old-newspaper ">
        <span className="headband-item">6201Z</span>
        <span className="ml-2">{getCurrentDate()}</span>
        <span className="headband-item">N°1</span>
      </div>
    </div>
  );
};

export default Header;
