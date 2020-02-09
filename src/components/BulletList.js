import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import BulletListItem from "./BulletListItem"

const CustomUl = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  align-items: space-between;
`

const BulletList = ({ list, type }) => (
  <CustomUl>
    {list.map((item, index) => (
      <BulletListItem type={type} key={index}>
        {item}
      </BulletListItem>
    ))}
  </CustomUl>
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
