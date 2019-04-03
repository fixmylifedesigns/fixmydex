import React, { Component } from "react";
import { Route, Switch, Link } from "react-router-dom";
import styled from "styled-components"
import Gen1 from "../Gen/Gen1";

const Home = styled.div`
background:red;
/* height:100vh; */
`
export default class HomePage extends Component {
  render() {
    return (
      <Home>
        
        <Link exact to="/">
          <button>Home</button>
        </Link>
        <Switch>
        <Link exact to="/gen1">
          <button>Gen1</button>
        </Link>
        <Link exact to="/">
          <button>Home</button>
        </Link>
</Switch>


        
      </Home>
    );
  }
}
