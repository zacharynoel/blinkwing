import React from "react"
import { Link } from "gatsby"
import Container from "components/Container"
import Image from "gatsby-image"

const PostLink = ({ post }) => (
  <div style={{ padding: `0.5rem` }}>
    <Link to={post.frontmatter.path}>
      <Container
        noTitle
        secondary
        style={{
          flexDirection: `row`,
          width: `100%`,
          maxWidth: `100vh`,
        }}
      >
        <div>
          <Image
            fluid={post.frontmatter.featuredImage.childImageSharp.fluid}
            style={{
              maxWidth: `100px`,
            }}
          />

          <div style={{ fontSize: `1rem` }}>{post.frontmatter.title}</div>

          <div style={{ fontSize: `0.7rem` }}>{post.frontmatter.date}</div>
        </div>

        <div
          style={{
            fontSize: `1rem`,
            paddingLeft: `2rem`,
            fontWeight: `normal`,
            width: `100%`,
          }}
        >
          {post.excerpt}
        </div>
      </Container>
    </Link>
  </div>
)

export default PostLink
