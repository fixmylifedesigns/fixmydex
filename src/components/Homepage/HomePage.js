import React, { Component } from "react";
import { Route, Switch, Link } from "react-router-dom";
import styled from "styled-components";
import Gen1 from "../Gen/Gen1";
import fmlLogo from "../Images/fmlpokeball.png";

const Home = styled.div`
  background: red;
  /* height:100vh; */
  display: flex;
  /* flex-direction: column; */
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
export default class HomePage extends Component {
  render() {
    return (
      <Home>
        <Switch>
          <Link exact to="/">
            <button>Home</button>
          </Link>
        </Switch>
        <Switch>
          <Link exact to="/gen1">
            <button>Gen1</button>
          </Link>
        </Switch>
        <FMLLogo src={fmlLogo} alt="" />
      </Home>
    );
  }
}
