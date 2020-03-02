import React from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"
import PropTypes from "prop-types"

import Layout from "components/layout"
import SEO from "components/seo"
import Container from "components/Container"
import ServicesContainer from "components/ServicesContainer"
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

const DEVELOPMENT_LIST = [
  "A custom website to fit your business needs",
  "We take you through the entire process from design to implementation",
]

const HOSTING_LIST = [
  "Web hosting to meet all of your website's traffic requirements",
  "Gain access to your own hosting server through your cPanel account",
]

const SEO_LIST = [
  "Rank higher on Google and other search engines",
  "Stay competitive in your industry",
  "Take advantage of your business's strengths",
]

const ECOMMERCE_LIST = [
  "Allow customers to buy your product on your own online store",
  "Customers can check out and pay right on your website",
]

const CMS_LIST = [
  "Add, remove, or update content on your own site",
  "Great for blogs, menus, and eCommerce sites",
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

    <Container title="Core Technologies" secondary>
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
      <ServicesContainer title="Web Design and Development" banner notab>
        <BulletList list={DEVELOPMENT_LIST} />
        <Link to="/services" style={{ margin: "10px 0", maxWidth: "100%" }}>
          <Button
            secondary
            style={{ margin: "1rem auto" }}
          >{`Learn More`}</Button>
        </Link>
      </ServicesContainer>

      <div
        style={{
          display: `flex`,
          flexFlow: `row wrap`,
          maxWidth: `775px`,
          justifyContent: `space-between`,
        }}
      >
        <ServicesContainer title="Web Hosting" tab="Additional Services">
          <BulletList list={HOSTING_LIST} />
        </ServicesContainer>
        <ServicesContainer
          title="SEO"
          clarifier="(Search Engine Optimization)"
          tab="Additional Services"
        >
          <BulletList list={SEO_LIST} />
        </ServicesContainer>
        <ServicesContainer title="eCommerce" tab="Additional Services">
          <BulletList list={ECOMMERCE_LIST} />
        </ServicesContainer>
        <ServicesContainer
          title="CMS"
          clarifier="(Content Management System)"
          tab="Additional Services"
        >
          <BulletList list={CMS_LIST} />
        </ServicesContainer>
      </div>
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
