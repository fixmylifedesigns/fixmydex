import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Nav from "./components/nav/Nav";
import HomePage from "./components/Homepage/Homepage"
import Gen1 from "./components/generations/Gen1/PokemonList";
// import Gen2 from "./components/generations/Gen2/PokemonList";
// import PokemonCard as Gen1 from "./components/generations/Gen1/PokemonList"
import Pokemon from "./components/Pokemon/Pokemon"
import styled from "styled-components";
import 'bootstrap/dist/css/bootstrap.css';

const Appication = styled.div`
background:red;
`

class App extends Component {
  render() {
    return (
      <Router>
      <Appication className="App">
      <Nav />
      <Route exact path="/" component={HomePage} />
      <Route exact path="/gen1" component={Gen1} />
      <Route exact path="/pokemon/:pokemonIndex" component={Pokemon}/>
      </Appication>
      </Router>
    );
  }
}

export default App;
