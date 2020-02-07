import React from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"

import Layout from "components/layout"
import SEO from "components/seo"
import BgImage from "components/BgImage"
import Button from "components/Button"
import Container from "../components/Container"
import ReactLogo from "../images/react-icon.png"
import GatsbyLogo from "../images/gatsby-icon.png"
import GraphQLLogo from "../images/graphql-icon.png"
import NodeJSLogo from "../images/nodejs-icon.png"
import JSLogo from "../images/js-icon.png"

const StackImages = {
  maxWidth: `15vh`,
  padding: `10px`,
}

const LandingContainer = styled(`div`)`
  position: relative;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-around;
  align-items: center;
  height: 437px;
  padding: 3rem 0 0;

  h1,
  h2 {
    color: #ffffff;
    font-size: 29px;
    margin: 0 auto;
    text-align: center;
    padding: 0 15px;
  }

  h2 {
    font-size: 21px;
  }
`

const ImageCover = styled(`div`)`
  position: absolute;
  top: 0;
  height: 437px;
  width: 100vw;
  z-index: -1;
  background: rgb(22, 42, 62, 0.44);
  background: -moz-linear-gradient(
    0deg,
    rgba(22, 42, 62, 1) 0%,
    rgba(22, 42, 62, 0.44) 100%
  );
  background: -webkit-linear-gradient(
    0deg,
    rgba(22, 42, 62, 1) 0%,
    rgba(22, 42, 62, 0.44) 100%
  );
  background: linear-gradient(
    0deg,
    rgba(22, 42, 62, 1) 0%,
    rgba(22, 42, 62, 0.44) 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#162a3e",endColorstr="#162a3e",GradientType=1);
`

const ButtonsContainer = styled(`div`)`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 0 auto;
  width: 100%;
`

const Bar = styled(`div`)`
  background: #162a3e;
  width: 25px;
  height: 344px;
  position: absolute;
  border-radius: 0 0 300px 0;
  ${({ right }) => right && "left: calc(100vw - 25px);"}
  ${({ right }) => right && "border-radius: 0 0 0 300px;"}
`

const IconsContainer = styled(`div`)`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;

  img {
    max-height: 100px;
    margin: 0 auto;
  }
`

const IconWrapper = styled(`div`)`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  background-color: rgb(22, 42, 62, 1);
  padding: 5px 5px 15px;
  color: white;
  width: 120px;
  margin: 5px;
  font-size: 18px;
  font-weight: 400;
  border-radius: 15px;
`

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <section>
      <LandingContainer>
        <BgImage
          fluid={data.homeBgImage.childImageSharp.fluid}
          style={{
            height: "437px",
          }}
        />
        <ImageCover />
        <h1>Modern, Fast, Responsive Websites</h1>
        <h2>Based in Fresno, we’re ready to build your next web project</h2>
        <ButtonsContainer>
          <Link to="/services" style={{ padding: 5 }}>
            <Button>Our Services</Button>
          </Link>
          <Link to="/contact" style={{ padding: 5 }}>
            <Button secondary>Contact Us</Button>
          </Link>
        </ButtonsContainer>
      </LandingContainer>
    </section>

    <section style={{ position: "relative", width: "100%" }}>
      <Bar />
      <Bar right />
      <Container title="Modern Tech To Our Advantage">
        <p>
          Tech can only advance through better development practices. This is
          why at Blinkwing we pride ourselves in always staying up-to-date on
          the latest tools and frameworks available to build the best websites
          and applications.
        </p>
      </Container>
    </section>

    <Container title="Core Technologies" secondary>
      <IconsContainer>
        <IconWrapper>
          <img style={StackImages} src={ReactLogo} alt="React" />
          React
        </IconWrapper>
        <IconWrapper>
          <img style={StackImages} src={GatsbyLogo} alt="Gatsby" />
          Gatsby
        </IconWrapper>
        <IconWrapper>
          <img style={StackImages} src={GraphQLLogo} alt="GraphQL" />
          GraphQL
        </IconWrapper>
        <IconWrapper>
          <img style={StackImages} src={NodeJSLogo} alt="NodeJS" />
          NodeJS
        </IconWrapper>
        <IconWrapper>
          <img style={StackImages} src={JSLogo} alt="JavaScript" />
          JavaScript
        </IconWrapper>
      </IconsContainer>
      <div></div>
    </Container>

    {/* 
      TODO: Home sections still needing to be added
      Followed by...
      - Featured Blog Post
      - Our Services (list with feather bullets)
      - Contact form
    */}
  </Layout>
)

export default IndexPage

export const query = graphql`
  query {
    homeBgImage: file(relativePath: { eq: "home-bg.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1200, grayscale: false) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
