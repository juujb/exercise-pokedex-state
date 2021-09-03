import React from 'react';
import Pokedex from './Pokedex';
import Button from './Button';
import pokemons from './data';
import './App.css';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      index: 0,
      type: '',
      disable: false,
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleClickType = this.handleClickType.bind(this);
    this.getPokeList = this.getPokeList.bind(this);
    this.enableDisableButton = this.enableDisableButton.bind(this);
  }

  getPokeList() {
    return pokemons.filter((pokeObject) => pokeObject.type.includes(this.state.type));
  }

  enableDisableButton() {
    if (this.getPokeList().length === 1) {
      this.setState((_props) => ({
        disable: true,
      }));
    } else {
      this.setState((_props) => ({
        disable: false,
      }));
    }
  }

  handleClickType(event) {
    const pokeType = event.target.name;
    this.setState((_props) => {
      return {
        type: pokeType,
        index: 0,
      }
    }, () => this.enableDisableButton());
  }

  handleClick() {
    this.setState((prevState, _props) => {
      if (prevState.index === this.getPokeList().length - 1) {
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
      <main className="app">
        <div className="pokedex">
          < Pokedex type={this.state.type} index={this.state.index} pokemons={this.getPokeList()} />
        </div>
        <button disabled={this.state.disable} className="prox-pokemon" type="button" onClick={this.handleClick}>Next Pokemon</button>
        <div className="types">
          <button className="pokemon-type" name="" onClick={this.handleClickType}>All</button>
          <Button class="pokemon-type" pokeList={pokemons} onClick={this.handleClickType} />
        </div>
      </main>
    );
  }
}

export default App;
