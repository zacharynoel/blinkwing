import React from "react"
import styled from "styled-components"

import ReactLogo from "images/react-icon.png"
import GatsbyLogo from "images/gatsby-icon.png"
import GraphQLLogo from "images/graphql-icon.png"
import NodeJSLogo from "images/nodejs-icon.png"
import JSLogo from "images/js-icon.png"

const IconsContainer = styled(`div`)`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;

  img {
    max-height: 100px;
    padding: 0 0 10px;
    text-align: center;
  }
`

const IconWrapper = styled(`div`)`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  background-color: rgb(22, 42, 62, 1);
  padding: 15px;
  color: white;
  width: 120px;
  margin: 5px;
  font-size: 18px;
  font-weight: 400;
  border-radius: 15px;
`

const TechIcons = () => (
  <IconsContainer>
    <IconWrapper>
      <img src={ReactLogo} alt="React" />
      React
    </IconWrapper>
    <IconWrapper>
      <img src={GatsbyLogo} alt="Gatsby" />
      Gatsby
    </IconWrapper>
    <IconWrapper>
      <img src={GraphQLLogo} alt="GraphQL" />
      GraphQL
    </IconWrapper>
    <IconWrapper>
      <img src={NodeJSLogo} alt="NodeJS" />
      NodeJS
    </IconWrapper>
    <IconWrapper>
      <img src={JSLogo} alt="JavaScript" />
      JavaScript
    </IconWrapper>
  </IconsContainer>
)

export default TechIcons
