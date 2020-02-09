import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import GrayFeather from "images/gray-feather.svg"
import BlueFeather from "images/blue-feather.svg"

const ListItem = styled(`li`)`
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;

  font-size: 16px;
  font-weight: 500;

  padding: 10px;

  img {
    width: 25px;
    margin-right: 15px;
    margin-bottom: auto;
  }
`

const BulletListItem = ({ type, children }) => (
  <ListItem>
    {type === 2 && <img src={GrayFeather} />}
    {type === 1 && <img src={BlueFeather} />}
    {children}
  </ListItem>
)

BulletListItem.propTypes = {
  type: PropTypes.number,
  children: PropTypes.string.isRequired,
}

export default BulletListItem
