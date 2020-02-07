import React from "react"
import Layout from "../components/layout"
import Container from "../components/Container"
import SEO from "../components/seo"
import ReactLogo from "../images/react-logo.svg"
import GatsbyLogo from "../images/gatsby-logo.svg"
import GraphQLLogo from "../images/graphql-logo.svg"
import NodeJSLogo from "../images/nodejs-logo.svg"
import JSLogo from "../images/javascript-logo.svg"

const StackImages = {
  maxWidth: `15vh`,
  padding: `10px`,
}

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Container title="Core Technologies" secondary>
      <div>
        <img style={StackImages} src={ReactLogo} alt="React" />
        <img style={StackImages} src={GatsbyLogo} alt="Gatsby" />
        <img style={StackImages} src={GraphQLLogo} alt="GraphQL" />
      </div>
      <div>
        <img style={StackImages} src={NodeJSLogo} alt="NodeJS" />
        <img style={StackImages} src={JSLogo} alt="JavaScript" />
      </div>
    </Container>
  </Layout>
)

export default IndexPage
