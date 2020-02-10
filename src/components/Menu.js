import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import styled from "styled-components"

const Container = styled(`ul`)`
  -webkit-transition: all 500ms ease-in-out;
  -moz-transition: all 500ms ease-in-out;
  -ms-transition: all 500ms ease-in-out;
  -o-transition: all 500ms ease-in-out;
  transition: all 500ms ease-in-out;
  opacity: 0;
  z-index: 2;
  position: absolute;
  background: #ededed;
  width: 100%;
  list-style: none;
  top: -400px;

  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;

  ${({ open }) => open && "opacity: 1;"}
  ${({ open }) => open && "top: 0;"}

  li {
    padding: 1rem 0;
    border-top: 4px solid #fff;
    width: 100%;
    text-align: center;
  }
`

const Menu = ({ menuOpen }) => (
  <Container open={menuOpen}>
    <li>
      <Link to="/">Home</Link>
    </li>
    <li>
      <Link to="/services">Services</Link>
    </li>
    <li>
      <Link to="/about">About</Link>
    </li>
    <li>
      <Link to="/blog">Blog</Link>
    </li>
    <li>
      <Link to="/contact">Contact</Link>
    </li>
  </Container>
)

Menu.propTypes = {
  menuOpen: PropTypes.bool.isRequired,
}

export default Menu
