import React, { Component } from "react";
import { Switch, Link } from "react-router-dom";
import styled from "styled-components";
// import Gen1 from "../generations/Gen1/PokemonList";
import fmlLogo from "../Images/fmlpokeball.png";

const Home = styled.div`
  background: red;
  /* height:100vh; */
  display: flex;
  flex-direction: row;
  justify-content:space-between;
  margin: auto;
`;
const FMLLogo = styled.img`
  width: 100px;
  height:100px;
  margin: 20px auto;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -o-user-select: none;
  user-select: none;
`;
export default class Nav extends Component {
  render() {
    return (
      <Home>
        <Switch>
          <Link exact to="/">
            {/* <button>Home</button> */}
              <FMLLogo src={fmlLogo} alt="" />
          </Link>
        </Switch>
      
      </Home>
    );
  }
}
