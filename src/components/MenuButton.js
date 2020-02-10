import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const Burger = styled(`div`)`
  div {
    width: 35px;
    height: 5px;
    background-color: black;
    margin: 6px 0;
    border-radius: 5px;
  }
`

const MenuButton = ({ onClick }) => (
  <div className="mobileNav" onClick={onClick}>
    <Burger>
      <div></div>
      <div></div>
      <div></div>
    </Burger>
  </div>
)

MenuButton.propTypes = {
  onClick: PropTypes.func.isRequired,
}

export default MenuButton
