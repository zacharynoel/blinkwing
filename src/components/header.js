import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Logo from "../images/full-logo.svg"
import Hamburger from "../images/hamburger-menu.svg"
import NavLinks from "./NavLinks"

const Header = () => (
  <>
    <header>
      <Link to="/">
        <img src={Logo} className="logo" alt="Blinkwing" />
      </Link>

      <img src={Hamburger} className="hamburger-menu" alt="Blinkwing" />

      <NavLinks className="nav-links" />
    </header>

    <NavLinks className="nav-links-collapse" id="expand" />
  </>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
