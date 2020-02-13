import React from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"

import Layout from "components/layout"
import SEO from "components/seo"
import Container from "components/Container"
import LandingSection from "components/LandingSection"
import TechIcons from "components/TechIcons"
import ContactForm from "components/ContactForm"
import Button from "components/Button"
import BulletList from "components/BulletList"
import PropTypes from "prop-types"
import Image from "gatsby-image"

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

const SERVICES_LIST = [
  "Web Design and Development",
  "Web Hosting",
  "SEO Services",
  "eCommerce",
  "Content Management System",
  "Logo Design and Rebranding",
  "Software Consulting",
]

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <LandingSection image={data.homeBgImage.childImageSharp} />

    <div style={{ position: "relative", width: "100%" }}>
      <Bar />
      <Bar right />

      <Container
        title="Modern Tech To Our Advantage"
        style={{ padding: "1rem 3rem" }}
      >
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

    <Container title="Featured Blog Post">
      <Link to={data.markdownRemark.frontmatter.path}>
        <Container
          noTitle
          style={{
            background: `#162a3e`,
            color: `white`,
            maxWidth: `50vh`,
            borderRadius: `30px 30px 30px 30px`,
          }}
        >
          <div>
            <div style={{ paddingBottom: `0.7rem`, fontWeight: `bold` }}>
              {data.markdownRemark.frontmatter.title}
            </div>
            <div style={{ paddingBottom: `1rem`, fontWeight: `normal` }}>
              {data.markdownRemark.frontmatter.date}
            </div>
          </div>

          <Image
            fluid={
              data.markdownRemark.frontmatter.featuredImage.childImageSharp
                .fluid
            }
            style={{
              width: `90%`,
              height: `90%`,
            }}
          />
        </Container>
      </Link>
    </Container>

    <Container title="Our Services" secondary>
      <BulletList list={SERVICES_LIST} />

      <Link to="/services">
        <Button
          style={{ margin: "1rem auto" }}
        >{`View Pricing & More Info`}</Button>
      </Link>
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
    */}
  </Layout>
)

IndexPage.propTypes = {
  data: PropTypes.object.isRequired,
}

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
    markdownRemark {
      excerpt(pruneLength: 250)
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        path
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 500) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
