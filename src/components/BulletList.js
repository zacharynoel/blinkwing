import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"

const BulletStyle = styled(`ul`)`
  font-size: 18px;
  font-weight: 500;
  li {
    padding: 10px;
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    align-items: center;
  }
  img {
    width: 25px;
    margin-right: 15px;
    margin-bottom: auto;
  }
`

const BulletList = ({ children }) => <BulletStyle>{children}</BulletStyle>

BulletList.propTypes = {
  children: PropTypes.node.isRequired,
}

export default BulletList
