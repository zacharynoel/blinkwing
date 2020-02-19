import React from "react"
import { graphql } from "gatsby"
import Layout from "components/layout"
import Container from "components/Container"
import { Link } from "gatsby"
import Button from "components/Button"
import Image from "gatsby-image"
import PropTypes from "prop-types"

const Template = ({ data }) => {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark

  return (
    <Layout>
      <Container
        notitle
        style={{ maxWidth: "500px", padding: "1rem", margin: 0 }}
      >
        <div style={{ width: "100%" }}>
          <h1 style={{ textAlign: "left" }}>{frontmatter.title}</h1>
          <h3 style={{ padding: `0 0 2rem` }}>{frontmatter.date}</h3>
        </div>

        <Image
          fluid={frontmatter.featuredImage.childImageSharp.fluid}
          style={{
            maxWidth: `500px`,
            width: `100%`,
          }}
        />

        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />

        <Link to="/blog">
          <Button>Back to Blog Posts</Button>
        </Link>
      </Container>
    </Layout>
  )
}

Template.propTypes = {
  data: PropTypes.object.isRequired,
}

export default Template

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
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
`
