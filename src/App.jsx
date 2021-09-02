import React from 'react';
import Pokedex from './Pokedex';
import pokemons from './data';
import './Pokedex.css';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      index: 0,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((prevState, _props) => {
      if (prevState.index === pokemons.length - 1) {
        return {
          index: 0,
        }
      }
      
      return {
        index: prevState.index + 1,
      }
    });
  }

  render() {
    return (
      <main className='app'>
        <div className='pokedex'>
          < Pokedex index={this.state.index} pokemons={pokemons} />
        </div>
        <button className="prox-pokemon" type="button" onClick={this.handleClick}>Próximo Pokemon</button>
      </main>
    )
  }
}

export default App;
