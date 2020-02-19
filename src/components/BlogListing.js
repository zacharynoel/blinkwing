import React from "react"
import { Link } from "gatsby"
import Container from "components/Container"
import Image from "gatsby-image/withIEPolyfill"
import PropTypes from "prop-types"
import styled from "styled-components"

const BlogListingWrapper = styled.div`
  width: 100%;
  cursor: pointer;

  .img-wrapper {
    width: 100%;
    max-height: 400px;
    border-radius: 0 0 15px 15px;
  }

  .blog-listing-container {
    padding: 1.5rem 0 0;
    border: 0 auto 1rem;
    max-width: 500px;
    box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.3);
    border-radius: 15px;
    ${({ featured }) => featured && "background-color: #162a3e;"}
  }

  .blog-listing-text p,
  .blog-listing-text h1 {
    ${({ featured }) => featured && "color: #fff !important;"}
    -webkit-transition: all 250ms ease-in;
    -moz-transition: all 250ms ease-in;
    -ms-transition: all 250ms ease-in;
    -o-transition: all 250ms ease-in;
    transition: all 250ms ease-in;
  }

  @media only screen and (min-width: 800px) {
    :hover,
    :active {
      .img-wrapper {
        filter: grayscale(0) brightness(1.1);
      }
    }

    .blog-listing-container,
    .img-wrapper {
      -webkit-transition: filter 500ms ease-in;
      -moz-transition: filter 500ms ease-in;
      -ms-transition: filter 500ms ease-in;
      -o-transition: filter 500ms ease-in;
      transition: filter 500ms ease-in;
      transition-property: filter, background;
    }

    .blog-listing-container {
      flex-flow: row nowrap;
      height: 300px;
      padding: 0;
      max-width: 600px;
    }

    .img-wrapper {
      height: 100%;
      width: 300px;
      border-radius: 0 15px 15px 0;
      filter: grayscale(0.25) brightness(0.9);
    }

    .blog-listing-text {
      width: 50%;
      max-width: 300px;
    }
  }
`

const BlogListing = ({ post, featured }) => (
  <BlogListingWrapper featured={featured}>
    <Link to={post.frontmatter.path}>
      <Container className="blog-listing-container" noTitle secondary>
        <div className="blog-listing-text">
          <div
            style={{
              textAlign: "left",
              padding: "0",
              width: "100%",
              margin: "0 auto",
            }}
          >
            <h1
              style={{
                textDecoration: "underline",
                padding: "0 0 0.25rem",
                margin: "0 1rem",
              }}
            >
              {post.frontmatter.title}
            </h1>
            <p
              style={{
                padding: "0 0 0.75rem",
                fontWeight: "normal",
                margin: "0 1rem",
              }}
            >
              {post.frontmatter.date}
            </p>
          </div>

          <p
            style={{
              fontWeight: "normal",
              padding: "1rem 0",
              margin: "0 1rem",
            }}
          >
            {post.excerpt}
          </p>
        </div>
        <Image
          className="img-wrapper"
          fluid={post.frontmatter.featuredImage.childImageSharp.fluid}
          objectPosition={"50% 20%"}
        />
      </Container>
    </Link>
  </BlogListingWrapper>
)

BlogListing.propTypes = {
  post: PropTypes.object.isRequired,
  featured: PropTypes.bool.isRequired,
}

BlogListing.defaultProps = {
  featured: false,
}

export default BlogListing
