import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Profile from './components/Profile/Profile';
import Career from './components/Career/Career';
import SelfTaught from './components/SelfTaught/SelfTaught';
import Motives from './components/Motives/Motives';

const App = () => {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />}>
          <Route path="/profile/parcours/*" element={<Career />} />
          <Route path="/profile/autodidacte/*" element={<SelfTaught />} />
          <Route path="/profile/motivations/*" element={<Motives />} />
        </Route>
        <Route path="/*" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
