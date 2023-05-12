import logo from '../src/logoHomeConnect.png';
import './App.css';

function Header() {
  return (
    <div className="flex flex-row">
      <img src={logo} className="w-20 h-30" alt="logo HomeConnect" />
    </div>
  );
}

function Navigation() {
  return (
    <div className="flex flex-row">
      <a className="mt-2 px-2 py-2 text-grey font-bold rounded-md hover:text-orange-500" href='/App.js'> Accueil</a>
      <a className="mt-2 px-2 py-2 text-grey font-bold rounded-md hover:text-orange-500" href='/ampoules'> Ampoules connectées</a>
      <a className="mt-2 px-2 py-2 text-grey font-bold rounded-md hover:text-orange-500" href='/prises'> Prises connectées</a>
      <a className="mt-2 px-2 py-2 text-grey font-bold rounded-md hover:text-orange-500" href='/serrures'> Serrures connectées</a>
      <a className="mt-2 px-2 py-2 text-grey font-bold rounded-md hover:text-orange-500" href='/cameras'> Caméras connectées</a>
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
