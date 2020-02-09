import React from "react"
import PropTypes from "prop-types"
import BulletListItem from "./BulletListItem"

const BulletList = ({ list, type, style }) => (
  <ul style={style}>
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
  style: PropTypes.object,
}

BulletList.defaultProps = {
  list: [],
  type: 1,
}

export default BulletList
