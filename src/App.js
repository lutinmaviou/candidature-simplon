import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Career from './components/Career/Career';
import SelfTaught from './components/SelfTaught/SelfTaught';
import Motives from './components/Motives/Motives';

const App = () => {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/parcours/*" element={<Career />} />
        <Route path="/autodidacte/*" element={<SelfTaught />} />
        <Route path="/motivations/*" element={<Motives />} />
        <Route path="/*" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
