import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import HomePage from "./components/Homepage/HomePage";
import Gen1 from "./components/Gen/Gen1";
// import PokemonCard as Gen1 from "./components/Gen1/PokemonList"
import styled from "styled-components";

const Appication = styled.div`
background:red;
`

class App extends Component {
  render() {
    return (
      <Router>
      <Appication className="App">
      <HomePage />
      <Route exact path="/" Component={HomePage} />
      <Route exact path="/gen1" component={Gen1} />
      </Appication>
      </Router>
    );
  }
}

export default App;
