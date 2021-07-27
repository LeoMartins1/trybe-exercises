import React from 'react';
import './App.css';
import PokedexList from './Pokedex';
import pokemon from './data';

function App() {
  return (
    <PokedexList pokemons={ pokemon }/>
  );
}

export default App;
