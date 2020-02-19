import React from "react"
import { Link } from "gatsby"
import Image from "gatsby-image/withIEPolyfill"
import PropTypes from "prop-types"
import styled, { css } from "styled-components"

import Container from "components/Container"

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
    margin: 0 auto 1rem;
    max-width: 500px;
    box-shadow: 3px 5px 10px rgba(0, 0, 0, 0.35);
    border-radius: 15px;
    background: rgb(199, 199, 199);
    background: -moz-linear-gradient(
      0deg,
      rgba(199, 199, 199, 1) 0%,
      rgba(237, 237, 237, 1) 100%
    );
    background: -webkit-linear-gradient(
      0deg,
      rgba(199, 199, 199, 1) 0%,
      rgba(237, 237, 237, 1) 100%
    );
    background: linear-gradient(
      0deg,
      rgba(199, 199, 199, 1) 0%,
      rgba(237, 237, 237, 1) 100%
    );
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#c7c7c7",endColorstr="#ededed",GradientType=1);
    ${({ featured }) =>
      featured &&
      css`
        background: rgb(22, 42, 62);
        background: -moz-linear-gradient(
          180deg,
          rgba(22, 42, 62, 1) 0%,
          rgba(61, 92, 124, 1) 100%
        );
        background: -webkit-linear-gradient(
          180deg,
          rgba(22, 42, 62, 1) 0%,
          rgba(61, 92, 124, 1) 100%
        );
        background: linear-gradient(
          180deg,
          rgba(22, 42, 62, 1) 0%,
          rgba(61, 92, 124, 1) 100%
        );
        filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#162a3e",endColorstr="#3d5c7c",GradientType=1);
      `}
  }

  .blog-listing-text {
    width: 100%;
    padding: 1rem 0 0;
    h1 {
      font-size: 1.4rem;
    }
  }

  .blog-listing-text p,
  .blog-listing-text h1 {
    -webkit-transition: all 250ms ease-in;
    -moz-transition: all 250ms ease-in;
    -ms-transition: all 250ms ease-in;
    -o-transition: all 250ms ease-in;
    transition: all 250ms ease-in;
    ${({ featured }) => featured && "color: #fff !important;"}
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
      max-width: 775px;
      ${({ featured }) => featured && "max-width: 650px;"}
      justify-content: space-between;

      ${({ featured }) =>
        featured &&
        css`
          background: rgb(22, 42, 62);
          background: -moz-linear-gradient(
            90deg,
            rgba(22, 42, 62, 1) 0%,
            rgba(61, 92, 124, 1) 100%
          );
          background: -webkit-linear-gradient(
            90deg,
            rgba(22, 42, 62, 1) 0%,
            rgba(61, 92, 124, 1) 100%
          );
          background: linear-gradient(
            90deg,
            rgba(22, 42, 62, 1) 0%,
            rgba(61, 92, 124, 1) 100%
          );
          filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#162a3e",endColorstr="#3d5c7c",GradientType=1);
        `}
    }

    .img-wrapper {
      height: 100%;
      width: 400px;
      border-radius: 0 15px 15px 0;
      filter: grayscale(0.25) brightness(0.9);
    }

    .blog-listing-text {
      width: 60%;
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
                padding: "0 0 0.25rem",
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
