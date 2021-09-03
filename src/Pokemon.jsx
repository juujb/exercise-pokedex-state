import React from 'react';
import './Pokemon.css';

class Pokemon extends React.Component {
  render() {
    const { name, type, averageWeight, image } = this.props.pokemon;
    return (
      <div className='pokemon'>
        <div className='info'>
          <span className='center'>{name}</span>
          <span  className='center'>{type}</span>
          <span  className='center'>Average Weight: {averageWeight.value} {averageWeight.measurementUnit}</span>
        </div>
        <img className='sprite' src={image} alt={name}></img>
      </div>
    );
  }
}

export default Pokemon;
