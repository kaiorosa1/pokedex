import React from 'react';
import './App.css';
import Pokedex from './Pokedex/Pokedex';
import 'tachyons';
import cards from '../pokemons.js';

function App() {
  return (
    <div className="App">
      <h1>Pokedex</h1>
      <div className="mw9 center ph3-ns">
        <div className="cf ph2-ns">
          <Pokedex cards={cards}/>
        </div>
      </div>
    </div>
  );
}

export default App;
