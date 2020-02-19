import React, { useState } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"
import Header from "./header"
import styled from "styled-components"
import "./layout.css"
import Logo from "images/full-logo.svg"
import NavLinks from "./NavLinks"
import Menu from "./Menu"

const Main = styled(`main`)`
  display: flex;
  align-items: center;
  flex: 1;
  flex-flow: column nowrap;
  width: 100%;
  position: relative;
`

const Layout = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false)

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <div className="wrapper">
        <Header
          setMenuOpen={setMenuOpen}
          menuOpen={menuOpen}
          siteTitle={data.site.siteMetadata.title}
        />
        <Main menuOpen={menuOpen}>
          <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
          {children}
        </Main>
        <footer className="footer">
          <NavLinks className="foot-links" />
          <div>Privacy Policy | © {new Date().getFullYear()} Blinkwing</div>
          <Link to="/">
            <img src={Logo} className="logo-footer" alt="Blinkwing" />
          </Link>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
