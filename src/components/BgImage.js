import React from "react"
import PropTypes from "prop-types"
import Image from "gatsby-image"

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

BgImage.propTypes = {
  style: PropTypes.object,
}

export default BgImage
