import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Career from './components/Career/Career';
import SelfTaught from './components/SelfTaught/SelfTaught';
import Motives from './components/Motives/Motives';
import CareerDetails from './components/Career/CareerDetails/CareerDetails';
import ScrollToTop from './utils/scrollToTop';
import Learned from './components/SelfTaught/Learned/Learned';
import HowLearned from './components/SelfTaught/HowLearned/HowLearned';

const App = () => {
  return (
    <div className="app">
      <ScrollToTop>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/parcours" element={<Career />}>
            <Route path="/parcours/detail" element={<CareerDetails />} />
          </Route>
          <Route path="/autodidacte" element={<SelfTaught />}>
            <Route path="/autodidacte/ce-que-j'ai-appris" element={<Learned />} />
            <Route path="/autodidacte/comment-j'ai-appris" element={<HowLearned />} />
          </Route>
          <Route path="/motivations/*" element={<Motives />} />
          <Route path="/*" element={<Home />} />
        </Routes>
      </ScrollToTop>
    </div>
  );
};

export default App;
