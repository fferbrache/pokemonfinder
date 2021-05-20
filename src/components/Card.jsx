import React, { Component } from 'react';
import "./cardContainer.css";

class Card extends Component {
  state = {
    flip: false
  }
  render() {
    const {hp, name, sprites} = this.props.pokemon
    const upperCased = name.toUpperCase()
    return (
      <div className="pokemon-card">
        <img onMouseLeave={()=> this.setState({flip: !this.state.flip})} onMouseOver={()=> this.setState({flip: !this.state.flip})} src={this.state.flip ? sprites.back : sprites.front } alt="" />
        <h2>{upperCased}</h2>
        <p>❤️ {hp}</p>
      </div>
    );
  }
}

export default Card;