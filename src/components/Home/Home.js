import React, { Component } from "react";
import { Switch, Link } from "react-router-dom";
import styled from "styled-components";
import Button from "@material-ui/core/Button";

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;

  height: 50%;

`;
const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const LinkStyled = styled(Link)`
  margin: 2px auto;
  width: 100px;
`;

export default class Home extends Component {
  GenerationsRowOne = [
    { link: "/gen1", title: "Generation I" },
    { link: "/gen2", title: "Generation II" },
    { link: "/gen3", title: "Generation III" },
    { link: "/gen4", title: "Generation IV" }
  ];

  GenerationsRowTwo = [
    { link: "/gen5", title: "Generation V" },
    { link: "/gen6", title: "Generation VI" },
    { link: "/gen7", title: "Generation VII" }
  ];

  render() {
    return (
      <HomeContainer>
        <CardContainer>
          {this.GenerationsRowOne.map(gen => {
            return (
              <Switch>
                <LinkStyled exact to={gen.link}>
                  <Button variant="contained" color="primary">
                    {gen.title}
                  </Button>
                </LinkStyled>
              </Switch>
            );
          })}{" "}
        </CardContainer>
        <CardContainer>
          {this.GenerationsRowTwo.map(gen => {
            return (
              <Switch>
                <LinkStyled exact to={gen.link}>
                  <Button variant="contained" color="primary">
                    {gen.title}
                  </Button>
                </LinkStyled>
              </Switch>
            );
          })}
        </CardContainer>
      </HomeContainer>
    );
  }
}
