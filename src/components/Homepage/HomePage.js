import React, { Component } from "react";
import { Switch, Link } from "react-router-dom";
import styled from "styled-components";
import Button from "@material-ui/core/Button";

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 80vh;
`;

const LinkStyled = styled(Link)`
margin:2px auto;
width:100px;
`

export default class Homepage extends Component {
  render() {
    //   console.log("hello")
    return (
      <HomeContainer>
        <Switch>
          <LinkStyled exact to="/gen1">
            <Button variant="contained" color="primary">
              Generation I
            </Button>
          </LinkStyled>
        </Switch>

        <Switch>
          <LinkStyled exact to="/gen2">
            <Button variant="contained" color="primary">
              Generation II
            </Button>
          </LinkStyled>
        </Switch>

        <Switch>
          <LinkStyled exact to="/gen3">
            <Button variant="contained" color="primary">
              Generation III
            </Button>
          </LinkStyled>
        </Switch>
        <Switch>
          <LinkStyled exact to="/gen4">
            <Button variant="contained" color="primary">
              Generation IV
            </Button>
          </LinkStyled>
        </Switch>

        <Switch>
          <LinkStyled exact to="/gen5">
            <Button variant="contained" color="primary">
              Generation V
            </Button>
          </LinkStyled>
        </Switch>

        <Switch>
          <LinkStyled exact to="/gen6">
            <Button variant="contained" color="primary">
              Generation VI
            </Button>
          </LinkStyled>
        </Switch>

        <Switch>
          <LinkStyled exact to="/gen7">
            <Button variant="contained" color="primary">
              Generation VII
            </Button>
          </LinkStyled>
        </Switch>

      </HomeContainer>
    );
  }
}
