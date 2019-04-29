import React, { Component } from "react";
import PokemonCard from "../Pokemon/PokemonCard";
import axios from "axios";

export default class PokemonList extends Component {
  state = {
    url: "https://raw.githubusercontent.com/fixmylifedesigns/Pokeapi/master/Generation7.json",
    pokemon: null
  };

  async componentDidMount() {
    const res = await axios.get(this.state.url);
    this.setState({ pokemon: res.data["results"] });
  }
  render() {
    return (
      <React.Fragment>
        {this.state.pokemon ? (
        <div>
          {this.state.pokemon.map(pokemon => (
            <PokemonCard 
            key={pokemon.name}
            name={pokemon.name}
            url={pokemon.url}
            />
          ))}
        </div>
        ) : (
          <h1>loading pokemon</h1>
        )}

      </React.Fragment>
    );
  }
}
