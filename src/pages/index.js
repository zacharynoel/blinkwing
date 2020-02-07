import React from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"

import Layout from "components/layout"
import Image from "components/image"
import SEO from "components/seo"
import BgImage from "components/BgImage"
import Button from "components/Button"

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
  left: 0;
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

const TechStackContainer = styled(`div`)`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  align-items: center;
  width: 100%;
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

      <div
        style={{
          display: "flex",
          flexFlow: "column nowrap",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          margin: "0 auto",
          textAlign: "left",
          padding: "1rem",
        }}
      >
        <h2 style={{ padding: "1rem", textAlign: "center" }}>
          Modern Tech To Our Advantage
        </h2>
        <p style={{ padding: "1.5rem 3rem" }}>
          Tech can only advance through better development practices. This is
          why at Blinkwing we pride ourselves in always staying up-to-date on
          the latest tools and frameworks available to build the best websites
          and applications.
        </p>
      </div>
    </section>
    <section
      style={{
        background: "#EDEDED",
        display: "flex",
        flexFlow: "column nowrap",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        padding: "1rem",
      }}
    >
      <h2 style={{ padding: "1rem" }}>Core Technologies</h2>
      <TechStackContainer>
        {/*  When Icons are ready to be added, remove the styling here and replace with display flex, flex-flow of column nowrap... */}
        <div
          style={{
            width: 100,
            height: 110,
            border: "1px solid black",
            margin: "5px auto",
          }}
        >
          React
        </div>
        <div
          style={{
            width: 100,
            height: 110,
            border: "1px solid black",
            margin: "5px auto",
          }}
        >
          Gatsby
        </div>
        <div
          style={{
            width: 100,
            height: 110,
            border: "1px solid black",
            margin: "5px auto",
          }}
        >
          GraphQL
        </div>
        <div
          style={{
            width: 100,
            height: 110,
            border: "1px solid black",
            margin: "5px auto",
          }}
        >
          NodeJS
        </div>
        <div
          style={{
            width: 100,
            height: 110,
            border: "1px solid black",
            margin: "5px auto",
          }}
        >
          JavaScript
        </div>
      </TechStackContainer>
    </section>

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
