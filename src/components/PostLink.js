import React from "react"
import { Link } from "gatsby"
import Container from "components/Container"
import Image from "gatsby-image"
import PropTypes from "prop-types"

const PostLink = ({ post }) => (
  <div style={{ padding: `0.5rem` }}>
    <Link to={post.frontmatter.path}>
      <Container noTitle secondary>
        <div style={{ textAlign: `center` }}>
          <div style={{ textDecoration: `underline`, paddingBottom: `0.7rem` }}>
            {post.frontmatter.title}
          </div>
          <div style={{ paddingBottom: `1rem`, fontWeight: `normal` }}>
            {post.frontmatter.date}
          </div>
        </div>

        <Image
          fluid={post.frontmatter.featuredImage.childImageSharp.fluid}
          style={{
            width: `30vh`,
            height: `30vh`,
          }}
        />

        <p style={{ fontWeight: `normal` }}>{post.excerpt}</p>
      </Container>
    </Link>
  </div>
)

PostLink.propTypes = {
  post: PropTypes.node.isRequired,
}

export default PostLink
