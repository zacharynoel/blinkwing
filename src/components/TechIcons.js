import React from "react"
import styled from "styled-components"

import ReactLogo from "images/react-logo.svg"
import GatsbyLogo from "images/gatsby-logo.svg"
import GraphQLLogo from "images/graphql-logo.svg"
import NodeJSLogo from "images/nodejs-logo.svg"
import JSLogo from "images/js-logo.svg"

const IconsContainer = styled(`div`)`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  max-width: 510px;
  align-items: center;
  text-align: center;
  width: 100%;

  img {
    max-height: 100px;
    padding: 0 0 10px;
    text-align: center;
  }

  @media only screen and (min-width: 800px) {
    justify-content: space-between;
    max-width: 785px;
  }
`

const IconWrapper = styled(`div`)`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  background-color: rgb(22, 42, 62, 1);
  padding: 10px;
  color: white;
  width: 134px;
  margin 5px;
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
