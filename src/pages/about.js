import React from "react"
import Image from "gatsby-image"
import { graphql } from "gatsby"

import Layout from "components/layout"
import SEO from "components/seo"
import Container from "components/Container"
import TechIcons from "components/TechIcons"
import PropTypes from "prop-types"

const About = ({ data }) => (
  <Layout>
    <SEO title="About" />
    <Container title="We're Blinkwing">
      <Image
        fluid={data.aboutPageImg.childImageSharp.fluid}
        alt="Fresno"
        style={{
          maxWidth: `500px`,
          maxHeight: `40vh`,
          padding: `0 0 1rem`,
          width: "100%",
          margin: "0 auto",
        }}
      />

      <p>
        Founded in February 2020 and based in the heart of the Central Valley,
        Blinkwing is a web design and development company that loves to learn,
        colloborate, and create. Our mission is to provide web services to help
        your business stay competitive and grow its online presence.
        <br />
        <br />
        As technology changes, so do we. We strive to be effective in our field,
        so we take the time to stay up-to-date on the latest tools and
        technologies.
        <br />
        <br />
        Web and design standards change over time, so it&apos;s important to
        have a web team behind you that understands the value of growth in the
        industry. We do not want to be complacent with a website that simply
        &quot;works&quot;, we want to provide you with the highest quality
        possible.
      </p>
    </Container>

    <Container
      title="Core Technologies"
      style={{ padding: "1rem 0.5rem" }}
      secondary
    >
      <TechIcons />
    </Container>
  </Layout>
)

About.propTypes = {
  data: PropTypes.node.isRequired,
}

export default About

export const query = graphql`
  query {
    aboutPageImg: file(relativePath: { eq: "fresno-about.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
