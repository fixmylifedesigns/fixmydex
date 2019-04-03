import React, { Component } from "react";
import Loading from "../Images/loading3.gif";
import styled from "styled-components";

const Card = styled.div`
  background: white;
  width: 90%;
  padding: 20px;
  height: 150px;
  display: flex;
  flex-direction: row;
  border: 2px solid grey;
  border-radius: 20px;
  justify-content: space-between;
  align-items: center;
  font-size: 40px;
  margin: 10px auto;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  &:hover {
    box-shadow: 0 30px 40px rgba(0, 0, 0, 10), 0 10px 10px rgba(0, 0, 0, 1);
  }
`;

const Name = styled.h2`
  display: none;
`;

const ImgContainer = styled.div`
  margin-right: 35px;
`;
const Sprite = styled.img`
  display: none;
  margin: 0;
  width: 130%;
  height: 130%;
`;

const Load = styled.img`
  height: 8%;
  width: 100px;
`;

const ErrorMsg = styled.h6`
  margin: 0;
  color: white;
  border-radius: 5px;
  background: red;
  border: solid black;
  /* font-size: 10px; */
  padding: 5px 20px;
  animation-name: blinker;
  animation-duration: 1s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
`;

const LoadingError = styled.div`
  /* justify-content:flex-end; */
  /* border: solid; */
`;

export default class PokemonCard extends Component {
  state = {
    name: "",
    imageUrl: "",
    pokemonIndex: "",
    imageLoading: true,
    toManyRequests: false
  };

  componentDidMount() {
    const { name, url } = this.props;

    const pokemonIndex = url.split("/")[url.split("/").length - 2];
    const newPokemonIndex= pokemonIndex.padStart(3, "0")

    const imageUrl = `https://raw.githubusercontent.com/fixmylifedesigns/sprites/master/sprites/pokemon/${pokemonIndex}.png`;
    const imageCard = `https://pokemon-trainer.com/images/sprite/xyorasani/${newPokemonIndex}.gif`
    const pokemonXY = `https://raw.githubusercontent.com/PokeAPI/pokeapi/master/data/Pokemon_XY_Sprites/${pokemonIndex}.png`;

    this.setState({
      name,
      imageUrl,
      pokemonIndex,
      imageCard : imageCard,
      pokemonXY: pokemonXY
    });
  }

  render() {
    return (
      <Card>
        <h1>{this.state.pokemonIndex}</h1>

        <LoadingError>
          <Name
            style={
              this.state.toManyRequest
                ? { display: "none" }
                : this.state.imageLoading
                ? null
                : { display: "block" }
            }
          >
            {this.state.name
              .toLowerCase()
              .split(" ")
              .map(
                letter => letter.charAt(0).toUpperCase() + letter.substring(1)
              )
              .join(" ")}
          </Name>
          {this.state.toManyRequests ? (
            <ErrorMsg>To Many Request</ErrorMsg>
          ) : null}
        </LoadingError>
        <ImgContainer>
          <Sprite
            onLoad={() => this.setState({ imageLoading: false })}
            onError={() => this.setState({ toManyRequests: true })}
            src={this.state.imageUrl}
            alt=""
            style={
              this.state.toManyRequest
                ? { display: "none" }
                : this.state.imageLoading
                ? null
                : { display: "block" }
            }
          />
          <LoadingError>
            {this.state.imageLoading ? <Load src={Loading} /> : null}
          </LoadingError>
        </ImgContainer>
      </Card>
    );
  }
}
