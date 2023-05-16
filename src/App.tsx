import React from 'react';
import './App.css';

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
      <a className="mt-2 px-2 py-2 text-grey font-bold rounded-md hover:text-orange-500" href='/App.tsx' onClick={handleClick} role="button"> Accueil</a>
      <a className="mt-2 px-2 py-2 text-grey font-bold rounded-md hover:text-orange-500" href='/AmpoulesConnectees.tsx' onClick={handleClick} role="button"> Ampoules connectées</a>
      <a className="mt-2 px-2 py-2 text-grey font-bold rounded-md hover:text-orange-500" href='/prises' onClick={handleClick} role="button"> Prises connectées</a>
      <a className="mt-2 px-2 py-2 text-grey font-bold rounded-md hover:text-orange-500" href='/serrures' onClick={handleClick} role="button"> Serrures connectées</a>
      <a className="mt-2 px-2 py-2 text-grey font-bold rounded-md hover:text-orange-500" href='/cameras' onClick={handleClick} role="button"> Caméras connectées</a>
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
