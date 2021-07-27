import React from 'react';
import PropTypes from 'prop-types';

class PokemonCard extends React.Component {
  render() {
    const {
      pokemon: {
        name,
        type,
        averageWeight: {
          value,
          measurementUnit},
        image,
      }
    } = this.props;

    return (
      <section className="pokemon-card">
        <img src={ image } alt="" className="pokemon-card-image"/>
        <h4 className="pokemon-name">{ name }</h4>
        <h5 className="pokemon-type">{ type }</h5>
        <h5 className="pokemon-weight">Average weight:{ value }{ measurementUnit}</h5>
      </section>
    )
  }
}

PokemonCard.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string,
    type: PropTypes.string,
    value: PropTypes.string,
    measurementUnit: PropTypes.string,
    image: PropTypes.string,
  }).isRequired,
};

export default PokemonCard;
