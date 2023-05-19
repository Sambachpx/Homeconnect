import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import AmpoulesConnectees from './AmpoulesConnectees';
import PrisesConnectees from './PrisesConnectees';
import SerruresConnectees from './SerruresConnectees';
import CamerasConnectees from './CamerasConnectees';

function Navigation() {
  return (
    <div className="flex flex-row">
      <Link to="/" className="mt-2 px-2 py-2 text-grey font-bold rounded-md hover:text-orange-500">Accueil</Link>
      <Link to="/ampoules" className="mt-2 px-2 py-2 text-grey font-bold rounded-md hover:text-orange-500">Ampoules connectées</Link>
      <Link to="/prises" className="mt-2 px-2 py-2 text-grey font-bold rounded-md hover:text-orange-500">Prises connectées</Link>
      <Link to="/serrures" className="mt-2 px-2 py-2 text-grey font-bold rounded-md hover:text-orange-500">Serrures connectées</Link>
      <Link to="/cameras" className="mt-2 px-2 py-2 text-grey font-bold rounded-md hover:text-orange-500">Caméras connectées</Link>
      <Search />
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
    <BrowserRouter>
      <div className="App">
        <Navigation />
        <Routes>
          <Route path="/" element={<h1>Accueil</h1>} />
          <Route path="/ampoules" element={<AmpoulesConnectees />} />
          <Route path="/prises" element={<PrisesConnectees />} />
          <Route path="/serrures" element={<SerruresConnectees />} />
          <Route path="/cameras" element={<CamerasConnectees />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
