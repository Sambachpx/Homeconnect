import React from 'react';
import { useHistory } from 'react-router-dom';
import './App.css';

function Header() {
  return (
    <div className="flex flex-row">
      <img src="../src/images/logoHomeConnect.png" className="w-20 h-30" alt="logo HomeConnect" />
    </div>
  );
}

function Navigation() {
  const history = useHistory();

  const handleNavigation = (path: string): void => {
    history.push(path);
  };

  return (
    <div className="flex flex-row">
      <button className="mt-2 px-2 py-2 text-grey font-bold rounded-md hover:text-orange-500" onClick={() => handleNavigation('/')}> Accueil</button>
      <button className="mt-2 px-2 py-2 text-grey font-bold rounded-md hover:text-orange-500" onClick={() => handleNavigation('/ampoules')}> Ampoules connectées</button>
      <button className="mt-2 px-2 py-2 text-grey font-bold rounded-md hover:text-orange-500" onClick={() => handleNavigation('/prises')}> Prises connectées</button>
      <button className="mt-2 px-2 py-2 text-grey font-bold rounded-md hover:text-orange-500" onClick={() => handleNavigation('/serrures')}> Serrures connectées</button>
      <button className="mt-2 px-2 py-2 text-grey font-bold rounded-md hover:text-orange-500" onClick={() => handleNavigation('/cameras')}> Caméras connectées</button>
    </div>
  );
}

function Search() {
  return (
    <input type='text' placeholder='Rechercher...' name='search' />
  );
}

function App() {
  return (
    <div>
      <Header />
      <Navigation />
      <Search />
    </div>
  );
}

export default App;
