import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import BulletListItem from "./BulletListItem"

const BulletList = ({ list, type }) => (
  <ul>
    {list.map((item, index) => (
      <BulletListItem type={type} key={index}>
        {item}
      </BulletListItem>
    ))}
  </ul>
)

BulletList.propTypes = {
  list: PropTypes.array.isRequired,
  type: PropTypes.number,
}

BulletList.defaultProps = {
  list: [],
  type: 1,
}

export default BulletList
