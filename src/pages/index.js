import React from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"
import PropTypes from "prop-types"

import Layout from "components/layout"
import SEO from "components/seo"
import Container from "components/Container"
import LandingSection from "components/LandingSection"
import TechIcons from "components/TechIcons"
import ContactForm from "components/ContactForm"
import Button from "components/Button"
import BulletList from "components/BulletList"
import BlogListing from "components/BlogListing"

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
      style={{ paddingRight: "1rem", paddingLeft: "1rem" }}
      secondary
    >
      <TechIcons />
    </Container>

    <Container title="Featured Blog Post">
      <div style={{ padding: `0.5rem` }}>
        {data.allMarkdownRemark.edges.map((post, index) => {
          return (
            index === 0 && <BlogListing post={post.node} key={index} featured />
          )
        })}
      </div>
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
  </Layout>
)

/*
<Link to={post.node.frontmatter.path} key={post.node.id}>
  <Container
    noTitle
    style={{
      background: `#162a3e`,
      color: `white`,
      borderRadius: `30px 30px 30px 30px`,
      boxShadow: `0px 5px 5px #6f798f`,
    }}
  >
    <div>
      <div style={{ paddingBottom: `0.7rem`, fontWeight: `bold` }}>
        {post.node.frontmatter.title}
      </div>
      <div style={{ paddingBottom: `1rem`, fontWeight: `normal` }}>
        {post.node.frontmatter.date}
      </div>
    </div>

    <Image
      fluid={
        post.node.frontmatter.featuredImage.childImageSharp.fluid
      }
      style={{
        width: `30vh`,
        height: `30vh`,
      }}
    />
  </Container>
</Link>
*/

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
    allMarkdownRemark(
      limit: 1
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          id
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
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
    }
  }
`
