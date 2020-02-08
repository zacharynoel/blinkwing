import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Container from "components/Container"
import TechIcons from "components/TechIcons"
import FresnoImage from "images/fresno-about.jpg"

const About = () => (
  <Layout>
    <SEO title="About" />
    <Container title="We're Blinkwing">
      <img
        src={FresnoImage}
        alt="Fresno"
        style={{
          maxWidth: `100%`,
          maxHeight: `40vh`,
          padding: `0 0 1rem`,
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

export default About
