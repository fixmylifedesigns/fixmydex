import React, { Component } from "react";
import axios from "axios";
// import 'bootstrap/dist/css/bootstrap.css';
import styled from "styled-components";

const ContainerDiv = styled.div`
  background: white;
  margin: auto;
  width: 600px;
  /* height: 600px; */
  padding: 20px 50px;
  border-radius: 20px;
  @media (max-width: 500px) {
    width: 90%;
    padding: 20px 5px;
  }
`;
const HeaderDiv = styled.div`
  /* margin: 0 60px; */
  display: flex;
  justify-content: space-between;
  border-bottom: 1px grey solid;
`;

const ImageTypeDesDiv = styled.div`
  margin: 20px auto;
  display: flex;
  justify-content: space-around;
  /* background:grey; */
  align-items: center;
`;

const ImageTypesContainer = styled.div`
  width: 400px;
  /* background:grey; */
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
`;

const TypeContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const Type = styled.p`
  width: 100px;
  padding: 5px;
  border-radius: 20px;
`;

const DescriptionDiv = styled.div`
  font-weight: bold;
  width: 400px;
`;

const Container = styled.div`
  margin: auto;
  display: flex;
  justify-content: space-between;
`;
const Leftcontainer = styled.div`
  width: 45%;
  text-align: left;
`;
const GenderRatio = styled.div`
  display: flex;
  align-items: center;
`;

const RightContainer = styled.div`
  width: 45%;
  text-align: left;
`;
const StatBar = styled.div`
  /* display:flex; */
  justify-content: space-between;
  width: 100%;
  /* background:grey; */
  align-items: center;
`;
const Progress = styled.div`
  width: 100%;
`;
const Section = styled.div`
border-bottom:1px dashed ;
`

const TYPE_COLORS = {
  bug: "B1C12E",
  dark: "4F3A2D",
  dragon: "755EDF",
  electric: "FCBC17",
  fairy: "F4B1F4",
  fighting: "823551D",
  fire: "E73B0C",
  flying: "A3B3F7",
  ghost: "6060B2",
  grass: "74C236",
  ground: "D3B357",
  ice: "A3E7FD",
  normal: "C8C4BC",
  poison: "934594",
  psychic: "ED4882",
  rock: "B9A156",
  steel: "B5B5C3",
  water: "329SF6"
};

class Pokemon extends Component {
  state = {
    name: "",
    pokemonIndex: "",
    pokemonimg: "",
    imageUrl: "",
    types: [],
    description: "",
    stats: {
      hp: "",
      attack: "",
      defense: "",
      speed: "",
      specialAttack: "",
      specialDefense: ""
    },
    height: "",
    weight: "",
    catchRate: "",
    eggGroups: "",
    abilities: "",
    genderRatioMale: "",
    genderRatioFemale: "",
    evs: "",
    hatchSteps: ""
  };

  async componentDidMount() {
    const { pokemonIndex } = this.props.match.params;
    // const pokemonIndex = pokemonIndex.split("/")[pokemonIndex.split("/").length - 2];
    const newPokemonIndex = pokemonIndex.padStart(3, "0");
    const imageUrl = `https://raw.githubusercontent.com/fixmylifedesigns/sprites/master/sprites/pokemon/${pokemonIndex}.png`;
    const pokemonUrl = `https://pokeapi.co/api/v2/pokemon/${pokemonIndex}`;
    const pokemonimg = `https://pokemon-trainer.com/images/sprite/xyorasani/${newPokemonIndex}.gif`;
    const pokemonSpeciesUrl = `https://pokeapi.co/api/v2/pokemon-species/${pokemonIndex}`;

    const pokemonRes = await axios.get(pokemonUrl);
    const name = pokemonRes.data.name;
    this.setState({ name });
    this.setState({ pokemonimg });
    this.setState({ imageUrl });

    let { hp, attack, defense, speed, specialAttack, specialDefense } = "";

    pokemonRes.data.stats.map(stat => {
      switch (stat.stat.name) {
        case "hp":
          hp = stat["base_stat"];
          break;
        case "attack":
          attack = stat["base_stat"];
          break;
        case "defense":
          defense = stat["base_stat"];
          break;
        case "speed":
          speed = stat["base_stat"];
          break;
        case "special-attack":
          specialAttack = stat["base_stat"];
          break;
        case "special-defense":
          specialDefense = stat["base_stat"];
          break;
      }
    });
    // convert decimeters to feet (0.0001 * 100)/100
    const height =
      Math.round((pokemonRes.data.height * 0.328084 + 0.0001) * 100) / 100;
    //converts to pounds
    const weight =
      Math.round((pokemonRes.data.weight * 0.220462 + 0.0001) * 100) / 100;

    const types = pokemonRes.data.types.map(type => type.type.name);

    const abilities = pokemonRes.data.abilities.map(ability => {
      return ability.ability.name
        .toLowerCase()
        .split("-")
        .map(s => s.charAt(0).toUpperCase() + s.substring(1))
        .join(" ");
    });

    const evs = pokemonRes.data.stats
      .filter(stat => {
        if (stat.effort > 0) {
          return true;
        }
        return false;
      })
      .map(stat => {
        return `${stat.effort} ${stat.stat.name
          .toLowerCase()
          .split("-")
          .map(s => s.charAt(0).toUpperCase() + s.substring(1))
          .join(" ")}`;
      })
      .join(", ");
    //getting pokemon description
    await axios.get(pokemonSpeciesUrl).then(res => {
      let description = "";
      res.data.flavor_text_entries.some(flavor => {
        if (flavor.language.name === "en") {
          description = flavor.flavor_text;
          return;
        }
      });
      const femaleRate = res.data["gender_rate"];
      const genderRatioFemale = 12.5 * femaleRate;
      const genderRatioMale = 12.5 * (8 - femaleRate);

      const catchRate = Math.round((100 / 255) * res.data["capture_rate"]);

      const eggGroups = res.data["egg_groups"]
        .map(group => {
          return group.name
            .toLowerCase()
            .split("-")
            .map(s => s.charAt(0).toUpperCase() + s.substring(1))
            .join(" ");
        })
        .join(", ");
      const hatchSteps = 255 * (res.data["hatch_counter"] + 1);
      this.setState({
        description,
        genderRatioFemale,
        genderRatioMale,
        catchRate,
        eggGroups,
        hatchSteps,
        stats: {
          hp,
          attack,
          defense,
          speed,
          specialAttack,
          specialDefense
        },
        height,
        weight,
        abilities,
        evs,
        types,
        pokemonIndex
      });
    });
  }

  render() {
    console.log(this.state);
    return (
      <ContainerDiv>
        <HeaderDiv>
          <h1>No. {this.state.pokemonIndex}</h1>

          <h1>
            {this.state.name
              .toLowerCase()
              .split(" ")
              .map(
                letter => letter.charAt(0).toUpperCase() + letter.substring(1)
              )
              .join(" ")}
          </h1>
        </HeaderDiv>
        <ImageTypeDesDiv>
          <ImageTypesContainer>
            <Image src={this.state.imageUrl} alt="" />
            <TypeContainer>
              {this.state.types.map(type => (
                <Type
                  style={{
                    backgroundColor: `#${TYPE_COLORS[type]}`,
                    color: "white"
                  }}
                >
                  {type
                    .toLowerCase()
                    .split(" ")
                    .map(s => s.charAt(0).toUpperCase() + s.substring(1))
                    .join(" ")}
                </Type>
              ))}
            </TypeContainer>
          </ImageTypesContainer>
          <DescriptionDiv>{this.state.description}</DescriptionDiv>
        </ImageTypeDesDiv>
        {/*    ***************Profile***********     */}
        <Section>
          <h3>Profile</h3>
        </Section>
        <Container>
          <Leftcontainer>
            <div>
              <h6>Height: {this.state.height}ft.</h6>
            </div>
            <div>
              <h6>Weight: {this.state.weight}lbs.</h6>
            </div>
            <div>
              <h6>Catch Rate: {this.state.catchRate}%</h6>
            </div>
            <GenderRatio>
              <h6>Gender Ratio:</h6>
              <Progress className="progress">
                <div
                  className="progress-bar"
                  role="progressBar"
                  style={{
                    width: `${this.state.genderRatioFemale}%`,
                    backgroundColor: "#C2185B"
                  }}
                  aria-valuenow="15"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <small>{this.state.genderRatioFemale}</small>
                </div>

                <div
                  className="progress-bar"
                  role="progressBar"
                  style={{
                    width: `${this.state.genderRatioMale}%`,
                    backgroundColor: "#1976D2"
                  }}
                  aria-valuenow="30"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  {" "}
                  <small>{this.state.genderRatioMale}</small>
                </div>
              </Progress>
            </GenderRatio>
          </Leftcontainer>

          <RightContainer>
            <div>
              <h6>Egg Groups: {this.state.eggGroups}</h6>
            </div>
            <div>
              <h6>Hatch Steps: {this.state.hatchSteps}</h6>
            </div>
            <div>
              <h6>Abilities: {this.state.abilities}</h6>
            </div>
            <div>
              <h6>EVs: {this.state.evs}</h6>
            </div>
          </RightContainer>
        </Container>

        {/*    **************stats************      */}
        <Section>
          <h3>Stats</h3>
        </Section>
        <Container>
          <Leftcontainer>
            <StatBar className="hp">
              <h5>HP</h5>
              <Progress className="progress">
                <div
                  className="progress-bar"
                  role="progressBar"
                  style={{ width: `${this.state.stats.hp}%` }}
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  {this.state.stats.hp}
                </div>
              </Progress>
            </StatBar>
            <StatBar className="attack">
              <h5>Attack</h5>
              <Progress className="progress">
                <div
                  className="progress-bar"
                  role="progressBar"
                  style={{ width: `${this.state.stats.attack}%` }}
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  {this.state.stats.attack}
                </div>
              </Progress>
            </StatBar>
            <StatBar className="defense">
              <h5>Defense</h5>
              <Progress className="progress">
                <div
                  className="progress-bar"
                  role="progressBar"
                  style={{ width: `${this.state.stats.defense}%` }}
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  {this.state.stats.defense}
                </div>
              </Progress>
            </StatBar>
          </Leftcontainer>
          <RightContainer>
            <StatBar className="speed">
              <h5>Speed</h5>
              <Progress className="progress">
                <div
                  className="progress-bar"
                  role="progressBar"
                  style={{ width: `${this.state.stats.speed}%` }}
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  {this.state.stats.speed}
                </div>
              </Progress>
            </StatBar>
            <StatBar className="SpecialAttack">
              <h5>Special Attack</h5>
              <Progress className="progress">
                <div
                  className="progress-bar"
                  role="progressBar"
                  style={{ width: `${this.state.stats.specialAttack}%` }}
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  {this.state.stats.specialAttack}
                </div>
              </Progress>
            </StatBar>
            <StatBar className="SpecialDefense">
              <h5>Special Defense</h5>
              <Progress className="progress">
                <div
                  className="progress-bar"
                  role="progressBar"
                  style={{ width: `${this.state.stats.specialDefense}%` }}
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  {this.state.stats.specialDefense}
                </div>
              </Progress>
            </StatBar>
          </RightContainer>
        </Container>
      </ContainerDiv>
    );
  }
}

export default Pokemon;
