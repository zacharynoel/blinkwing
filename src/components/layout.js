/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"

import Header from "./header"
import "./layout.css"
import Logo from "../images/full-logo.svg"

const Layout = ({ children }) => {
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
      <Header siteTitle={data.site.siteMetadata.title} />
      <main>{children}</main>
    </div>
    <footer>
      <Link to="/">
        <img src={Logo} className="logo" alt="Blinkwing"/>
      </Link>
      <ul className="foot-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/">Services</Link></li>
        <li><Link to="/">About</Link></li>
        <li><Link to="/">Blog</Link></li>
        <li><Link to="/">Contact</Link></li>
      </ul>
      <div className="foot-cr">
        © {new Date().getFullYear()} Blinkwing
      </div>
    </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
