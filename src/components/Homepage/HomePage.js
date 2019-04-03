import React, { Component } from "react";
import { Route, Switch, Link } from "react-router-dom";
import styled from "styled-components";
import Gen1 from "../Gen/Gen1";
import fmlLogo from "../Images/fmlpokeball.png";

const Home = styled.div`
  background: red;
  /* height:100vh; */
  display:flex;
  flex-direction: column;
`;
const FMLLogo = styled.img`
  width: 500px;
  margin: 20px auto;
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
