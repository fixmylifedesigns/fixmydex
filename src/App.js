import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Nav from "./components/nav/Nav";
import Home from "./components/Home/Home"
import Gen1 from "./components/generations/Gen1";
import Gen2 from "./components/generations/Gen2";
import Gen3 from "./components/generations/Gen3";
import Gen4 from "./components/generations/Gen4";
import Gen5 from "./components/generations/Gen5";
import Gen6 from "./components/generations/Gen6";
import Gen7 from "./components/generations/Gen7";
import Pokemon from "./components/Pokemon/Pokemon"
import styled from "styled-components";
import 'bootstrap/dist/css/bootstrap.css';

const Appication = styled.div`
background:red;
min-height:100vh;
`


class App extends Component {
  render() {
    return (
      <Router>
      <Appication className="App">
      <Nav />
      <Route exact path="/" component={Home} />
      <Route exact path="/gen1" component={Gen1} />
      <Route exact path="/gen2" component={Gen2} />
      <Route exact path="/gen3" component={Gen3} />
      <Route exact path="/gen4" component={Gen4} />
      <Route exact path="/gen5" component={Gen5} />
      <Route exact path="/gen6" component={Gen6} />
      <Route exact path="/gen7" component={Gen7} />
      <Route exact path="/pokemon/:pokemonIndex" component={Pokemon}/>
      </Appication>
      </Router>
    );
  }
}

export default App;
