import React, { Component } from "react";
import { Switch, Link } from "react-router-dom";
import styled from "styled-components";
export default class HomePage extends Component {
  render() {
    //   console.log("hello")
    return (
      <div>
        <Switch>
          <Link exact to="/gen1">
            <button>Gen1</button>
          </Link>
        </Switch>
      </div>
    );
  }
}
