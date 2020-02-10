import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const NavLinks = props => (
  <ul className={props.className}>
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
  </ul>
)

NavLinks.propTypes = {
  className: PropTypes.node.isRequired,
}

export default NavLinks
