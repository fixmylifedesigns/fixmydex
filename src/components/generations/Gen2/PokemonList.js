import React, { Component } from "react";
import PokemonCard from "./PokemonCard";
import {Route, Link} from "react-router-dom"
import axios from "axios";
import Pokemon from "./Pokemon"

export default class PokemonList extends Component {
  state = {
    url: "https://raw.githubusercontent.com/fixmylifedesigns/Pokeapi/master/Generation2.json",
    pokemon: null
  };

  async componentDidMount() {
    const res = await axios.get(this.state.url);
    this.setState({ pokemon: res.data["results"] });
  }
  render() {
    return (
      <React.Fragment>
 <Link to={`/gen1/${this.state.pokemon.name}`}> 
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
        </Link>
        <Route path={`/gen1/${pokemon.name}`} render={props => (
         
         <Pokemon 
         name={this.state.pokemon.name}
         history={props.history}
         match={props.match}
         location={props.location}
         />
       )}
       />

      </React.Fragment>
    );
  }
}
