import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AmpoulesConnectees from './AmpoulesConnectees';
import PrisesConnectees from './PrisesConnectees';
import SerruresConnectees from './SerruresConnectees';
import CamerasConnectees from './CamerasConnectees';

function Header() {
  return (
    <div className="flex flex-row">
      <img src="../src/images/logoHomeConnect.png" className="w-20 h-30" alt="logo HomeConnect" />
    </div>
  );
}

function Navigation() {
  const handleClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>): void => {
    event.preventDefault();
  };
  
  return (
    <div className="flex flex-row">
      <a className="mt-2 px-2 py-2 text-grey font-bold rounded-md hover:text-orange-500" href="/" onClick={handleClick} role="button"> Accueil</a>
      <a className="mt-2 px-2 py-2 text-grey font-bold rounded-md hover:text-orange-500" href="/ampoules" onClick={handleClick} role="button"> Ampoules connectées</a>
      <a className="mt-2 px-2 py-2 text-grey font-bold rounded-md hover:text-orange-500" href="/prises" onClick={handleClick} role="button"> Prises connectées</a>
      <a className="mt-2 px-2 py-2 text-grey font-bold rounded-md hover:text-orange-500" href="/serrures" onClick={handleClick} role="button"> Serrures connectées</a>
      <a className="mt-2 px-2 py-2 text-grey font-bold rounded-md hover:text-orange-500" href="/cameras" onClick={handleClick} role="button"> Caméras connectées</a>
    </div>
  );
}

function Search() {
  return (
    <input type="text" placeholder="Rechercher..." name="search" />
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Navigation />
        <Search />
        <Routes>
          <Route path="/ampoules" element={<AmpoulesConnectees />} />
          <Route path="/prises" element={<PrisesConnectees />} />
          <Route path="/serrures" element={<SerruresConnectees />} />
          <Route path="/cameras" element={<CamerasConnectees />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
