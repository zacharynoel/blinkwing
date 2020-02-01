import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Logo from "../images/full-logo.svg"

const Header = ({ siteTitle }) => (
  <header>
    <Link to="/">
      <img src={Logo} className="logo" alt="Blinkwing"/>
    </Link>
    
    <nav>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/">Services</Link></li>
        <li><Link to="/">About</Link></li>
        <li><Link to="/">Blog</Link></li>
        <li><Link to="/">Contact</Link></li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
