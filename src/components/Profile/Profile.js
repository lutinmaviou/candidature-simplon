import React from 'react';
import './Profile.css';
import Navbar from '../Navbar/Navbar';
import Career from '../Career/Career';
import { useLocation } from 'react-router-dom';
import SelfTaught from '../SelfTaught/SelfTaught';
import Motives from '../Motives/Motives';

const Profile = () => {
  const location = useLocation();
  return (
    <>
      <Navbar />
      <section className="profile-container">
        {location.pathname === '/profile/parcours' && <Career />}
        {location.pathname === '/profile/autodidacte' && <SelfTaught/>}
        {location.pathname === '/profile/motivations' && <Motives />}
      </section>
    </>
  );
};

export default Profile;
