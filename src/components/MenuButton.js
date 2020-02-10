import React from "react"
import PropTypes from "prop-types"
import styled, { css } from "styled-components"

const Burger = styled(`div`)`
  position: relative;
  width: 35px;

  div {
    width: 35px;
    height: 5px;
    background-color: black;
    margin: 6px 0;
    border-radius: 5px;
    opacity: 1;
    position: relative;

    -webkit-transition: all 500ms ease-in-out;
    -moz-transition: all 500ms ease-in-out;
    -ms-transition: all 500ms ease-in-out;
    -o-transition: all 500ms ease-in-out;
    transition: all 500ms ease-in-out;
  }

  div:nth-child(4),
  div:nth-child(5) {
    opacity: 0;
    position: absolute;
    top: 25%;
  }

  ${({ open }) =>
    open &&
    css`
    div:nth-child(1),
    div:nth-child(2),
    div:nth-child(3) {
      -moz-transform: scale(0);
      -webkit-transform: scale(0);
      -o-transform: scale(0);
      -ms-transform: scale(0);
      transform: scale(0);
    }
    div:nth-child(4) {
      opacity: 1;
      -moz-transform: rotate(-45deg);
      -webkit-transform: rotate(-45deg);
      -o-transform: rotate(-45deg);
      -ms-transform: rotate(-45deg);
      transform: rotate(-45deg);
    }
    div:nth-child(5) {
      opacity: 1;
      -moz-transform: rotate(45deg);
      -webkit-transform: rotate(45deg);
      -o-transform: rotate(45deg);
      -ms-transform: rotate(45deg);
      transform: rotate(45deg);
    }}
  `}
`

const MenuButton = ({ onClick, menuOpen }) => (
  <div className="mobileNav" onClick={onClick}>
    <Burger open={menuOpen}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </Burger>
  </div>
)

MenuButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  menuOpen: PropTypes.bool.isRequired,
}

export default MenuButton
