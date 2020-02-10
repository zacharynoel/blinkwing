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

  @media only screen and (min-width: 700px) {
    display: none;
  }
`

const Menu = ({ menuOpen, setMenuOpen }) => (
  <Container open={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
    <li>
      <Link to="/">
        <div style={{ width: "100%", height: "100%" }}>Home</div>
      </Link>
    </li>
    <li>
      <Link to="/services">
        <div style={{ width: "100%", height: "100%" }}>Services</div>
      </Link>
    </li>
    <li>
      <Link to="/about">
        <div style={{ width: "100%", height: "100%" }}>About</div>
      </Link>
    </li>
    <li>
      <Link to="/blog">
        <div style={{ width: "100%", height: "100%" }}>Blog</div>
      </Link>
    </li>
    <li>
      <Link to="/contact">
        <div style={{ width: "100%", height: "100%" }}>Contact</div>
      </Link>
    </li>
  </Container>
)

Menu.propTypes = {
  menuOpen: PropTypes.bool.isRequired,
  setMenuOpen: PropTypes.func.isRequired,
}

export default Menu
