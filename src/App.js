import './App.css';
import CardContainer from './components/CardContainer.jsx';
import { data } from './data/data';
import pokemonLogo from './assets/img/pokemonLogo.png';
import finderLogo from './assets/img/finder.png';

function App() {
  return (
    <div className="App">
        <img className="pokemon-logo" src={pokemonLogo} alt="Pokemon Logo"/>
        <img className="pokemon-logo" src={finderLogo} alt="Finder"/>
      <CardContainer pokemonData={data}/>
    </div>
  );
}

export default App;
