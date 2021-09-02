import React from 'react';
import Pokemon from './Pokemon';

class Pokedex extends React.Component {

  render() {
    return this.props.pokemons.filter((__, index) => index === this.props.index ).map((mon) => < Pokemon key={this.props.index} pokemon={mon} />);
  }
}

export default Pokedex;
