import React from "react"
import { graphql } from "gatsby"
import BlogListing from "components/BlogListing"
import PropTypes from "prop-types"
import Layout from "components/layout"
import SEO from "components/seo"
import Container from "components/Container"

const Blog = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const Posts = edges.map(edge => (
    <BlogListing key={edge.node.id} post={edge.node} />
  ))

  return (
    <Layout>
      <SEO title="Blog" />

      <Container title="Company Blog Posts">
        <div>{Posts}</div>
      </Container>
    </Layout>
  )
}

Blog.propTypes = {
  data: PropTypes.object.isRequired,
}

export default Blog

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 200)
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
