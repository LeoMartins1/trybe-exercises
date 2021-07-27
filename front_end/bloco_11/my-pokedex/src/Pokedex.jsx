import React from 'react';
import PropTypes from 'prop-types';
import PokemonCard from './Pokemon';

class PokedexList extends React.Component {
  render() {
    const { pokemons } = this.props;

    return (
      <div className="pokedex">
        { pokemons.map((pokemon) => <PokemonCard key={ pokemon.id } pokemon={ pokemon }/>)}
      </div>
    )
  }
}

PokedexList.propTypes = {
  pokemons: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    type: PropTypes.string,
    value: PropTypes.number,
    measurementUnit: PropTypes.string,
    image: PropTypes.string,
  })).isRequired,
}

export default PokedexList;
