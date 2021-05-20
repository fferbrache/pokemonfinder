import React, { Component } from 'react'
import Card from './Card'
import './cardContainer.css'

export class CardContainer extends Component {
  state = {
    searchCriteria: "",
    pokemonList: [],
    pokemonBerries: [],
    pokemonName: "",
    hp: "",
    fronturl: "",
    backurl: ""
  }

  componentDidMount() {
    this.setState({
      pokemonList: this.props.pokemonData[0].pokemon,
    });
  }

  searchCriteria = (e) => {
    const search = e.target.value.toLowerCase()
    this.setState({
      searchCriteria: search
    })
  }

  handleInputFormValues = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
    e.preventDefault();
  }

  handleSubmit = (e) => {
    const newPokemon = {
      name: this.state.pokemonName,
      hp: this.state.hp,
      sprites: {
        front: this.state.fronturl,
        back: this.state.backurl,
      },
    };
    const newPokemonList = [newPokemon,...this.state.pokemonList]
    this.setState({
      pokemonList: newPokemonList,
    });
    e.preventDefault();
  };

  render() {
    const {pokemonList} = this.state
    const filteredData = pokemonList.filter((pokemon) => pokemon.name.includes(this.state.searchCriteria)) ? pokemonList.filter((pokemon) => pokemon.name.includes(this.state.searchCriteria)) : pokemonList

    return (
      <div className="main-card-container">
        <div>
          <input name="pokemonName" 
          className="search-field" 
          onChange={this.searchCriteria} 
          type="text" 
          placeholder="Search for a pokemon"/>
        </div>
        {/* form */}
        <div> 
          <form onSubmit={this.handleSubmit}>
        <input 
        name="pokemonName"
        className="create-field"
        type="text"
        placeholder="Enter Pokemon name"
        value={this.state.pokemonName}
        onChange={this.handleInputFormValues}
        />
        <input 
        name="hp"
        className="create-field" 
        type="text" 
        placeholder="Enter a HP level"
        value={this.state.hp}
        onChange={this.handleInputFormValues}
        />
        <input 
        name="fronturl" 
        className="create-field" 
        type="text" 
        placeholder="Enter a front image URL"
        value={this.state.fronturl}
        onChange={this.handleInputFormValues}
        />
        <input 
        name="backurl" 
        className="create-field" 
        type="text" 
        placeholder="Enter a back image URL"
        value={this.state.backurl}
        onChange={this.handleInputFormValues}
        />
        <input className="create-button" type="submit" value="Create" /> 
          </form>
        </div>
        <div className="card-container">

        {filteredData.map((singlePokemon,index) => (
        <Card key={singlePokemon.name} pokemon={singlePokemon} />
        ))}
        </div>
      </div>
    );
  }
}

export default CardContainer;