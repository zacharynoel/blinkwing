import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"

import Layout from "components/layout"
import SEO from "components/seo"
import Container from "components/Container"
import LandingSection from "components/LandingSection"
import TechIcons from "components/TechIcons"
import ContactForm from "components/ContactForm"

const Bar = styled(`div`)`
  background: #162a3e;
  width: 25px;
  height: 344px;
  position: absolute;
  border-radius: 0 0 300px 0;
  ${({ right }) => right && "left: calc(100% - 25px);"}
  ${({ right }) =>
    right &&
    "border-radius: 0 0 0 300px;"}

  @media only screen and (min-width: 413px) {
    height: 244px;
  }
`

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <LandingSection image={data.homeBgImage.childImageSharp} />

    <div style={{ position: "relative", width: "100%" }}>
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
    </div>

    <Container
      title="Core Technologies"
      style={{ padding: "1rem 0.5rem" }}
      secondary
    >
      <TechIcons />
    </Container>

    <Container
      title="Get In Touch"
      style={{
        background: `#162a3e`,
        color: `white`,
      }}
      contact
    >
      <ContactForm />
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
        fluid(maxWidth: 4831) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
