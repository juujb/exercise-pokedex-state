import React from 'react';

class Button extends React.Component {
  render() {
    const allTypes = this.props.pokeList.map((poke) => poke.type);
    return(
      Array.from(new Set(allTypes)).map((type) => <button name={type} type="button" className={this.props.class} onClick={this.props.onClick}>{type}</button>)
    );
  }
}

export default Button;
