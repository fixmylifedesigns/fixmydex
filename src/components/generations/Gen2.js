import React, { Component } from "react";
import PokemonCard from "../Pokemon/PokemonCard";
import axios from "axios";
import styled from "styled-components";

const Container = styled.div`
  width: 90%;
  /* background: gray; */
  margin:0 auto;
  @media (max-width: 500px) {
    width:100%;
  }
`;

const Div = styled.div`

`


const CardContainer = styled.div`
display:flex;
justify-content: space-between;
flex-direction:row;
  flex-wrap: wrap;
  @media (max-width: 500px) {
    display:block;
  }
`;


export default class PokemonList extends Component {
  state = {
    url:
      "https://raw.githubusercontent.com/fixmylifedesigns/Pokeapi/master/Generation2.json",
    pokemon: null
  };

  async componentDidMount() {
    const res = await axios.get(this.state.url);
    this.setState({ pokemon: res.data["results"] });
  }
  render() {
    return (
      <React.Fragment>
        <Container>
          <Div>
            {this.state.pokemon ? (
              <CardContainer>
                {this.state.pokemon.map(pokemon => (
                  <PokemonCard
                    key={pokemon.name}
                    name={pokemon.name}
                    url={pokemon.url}
                  />
                ))}
              </CardContainer>
            ) : (
              <h1>loading pokemon</h1>
            )}
          </Div>
        </Container>
      </React.Fragment>
    );
  }
}
