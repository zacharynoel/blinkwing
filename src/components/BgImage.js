import React from "react"
import Image from "gatsby-image"
import styled from "styled-components"

/*
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: -1;
  height: ${props => props.height || 'auto'};

  // Adjust image positioning (if image covers area with defined height) and add font-family for polyfill
  & > img {
    object-fit: ${props => props.fit || 'cover'} !important;
    object-position: ${props => props.position || '50% 50%'} !important;
    font-family: 'object-fit: ${props => props.fit || 'cover'} !important; object-position: ${props => props.position || '50% 50%'} !important;'
  }
`*/

const BgImage = ({ style, ...props }) => (
  <Image
    {...props}
    style={{
      position: "absolute",
      top: 0,
      height: "auto",
      width: "100vw",
      zIndex: -2,
      ...style,
    }}
  />
)

export default BgImage
