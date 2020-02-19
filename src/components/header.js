import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

import Logo from "images/full-logo.svg"
import Nav from "./Nav"
import MenuButton from "./MenuButton"

const Container = styled(`header`)`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  width: 100%;
  max-width: 820px;
  margin: 0 auto;
  align-items: center;
  padding: 1rem;
  z-index: 10;

  .logo-nav {
    max-width: 70%;
    max-height: 60px;
  }

  .nav {
    display: none;
  }

  .menuButton {
    display: flex;
  }

  @media only screen and (min-width: 700px) {
    .menuButton {
      display: none;
    }

    .nav {
      display: flex;
    }
  }
`

const Header = ({ setMenuOpen, menuOpen }) => (
  <Container>
    <div>
      <Link to="/">
        <img src={Logo} className="logo-nav" alt="Blinkwing" />
      </Link>
    </div>

    <Nav />
    <MenuButton
      menuOpen={menuOpen}
      onClick={() => {
        setMenuOpen(!menuOpen)
      }}
    />
  </Container>
)

Header.propTypes = {
  setMenuOpen: PropTypes.func.isRequired,
  menuOpen: PropTypes.bool.isRequired,
}

export default Header
