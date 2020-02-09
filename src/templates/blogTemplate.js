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
      <Container title={frontmatter.title}>
        <h3 style={{ paddingBottom: `2rem` }}>{frontmatter.date}</h3>

        <Image
          fluid={frontmatter.featuredImage.childImageSharp.fluid}
          style={{
            maxWidth: `500px`,
            width: `100%`,
          }}
        />

        <p
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
  data: PropTypes.node.isRequired,
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
