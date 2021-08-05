import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const Container = styled(`ul`)`
  li {
    display: inline-flex;
    padding: 0px 10px;
  }
`

const Nav = () => (
  <Container className="nav">
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

export default Nav
