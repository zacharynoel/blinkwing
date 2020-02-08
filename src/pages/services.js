import React from "react"

import Layout from "components/layout"
import SEO from "components/seo"
import Container from "components/Container"
import Button from "components/Button"
import { Link } from "gatsby"
import LeftFeather from "images/left-feather-bullet.svg"
import RightFeather from "images/right-feather-bullet.svg"
import BulletList from "components/BulletList"

const Services = () => (
  <Layout>
    <SEO title="Services" />
    <Container title="Services">
      <h4 style={{ padding: `1rem` }}>Here&apos;s the Blinkwing Method</h4>

      <p style={{ width: `100%` }}>
        <BulletList>
          <li>
            <img src={RightFeather} />
            You define the requirements for your project, we provide a quote for
            the price and timeframe. We also discuss plans for domain
            registration and hosting your website.
          </li>
          <li>
            <img src={RightFeather} />
            Once we come to an agreement, a contract is formed and we begin our
            work.
          </li>
          <li>
            <img src={RightFeather} />
            As we design your product, you will see the progress after each
            milestone - from wireframing to the full design.
          </li>
          <li>
            <img src={RightFeather} />
            After the full design is approved, we begin development.
          </li>
          <li>
            <img src={RightFeather} />
            Once your project is complete and final approval is given, your site
            is launched!
          </li>
        </BulletList>
      </p>

      <h4 style={{ padding: `1rem` }}>What We Offer</h4>

      <p style={{ width: `100%` }}>
        <BulletList>
          <li>
            <img src={LeftFeather} />
            Web Design and Development
          </li>
          <li>
            <img src={LeftFeather} />
            Web Hosting
          </li>
          <li>
            <img src={LeftFeather} />
            SEO Services
          </li>
          <li>
            <img src={LeftFeather} />
            eCommerce
          </li>
          <li>
            <img src={LeftFeather} />
            Content Management System
          </li>
          <li>
            <img src={LeftFeather} />
            Logo Design and Rebranding
          </li>
          <li>
            <img src={LeftFeather} />
            Software Consulting
          </li>
        </BulletList>
      </p>
    </Container>

    <Container title="Pricing">
      <p style={{ width: `100%` }}>
        Pricing is determined by the size and scope of your project, however our
        starting prices are listed here:
        <br />
        <br />
        Website design/development <b>starting from $500</b>
        <br />
        <br />
        Website hosting <b>starting from $50/month</b>
        <br />
        <br />
        Logo design <b>starting from $200</b>
        <br />
        <br />
        If you have any questions about our pricing or want an exact quote,
        please contact us so that we can discuss your project&apos;s needs.
      </p>

      <Link to="/contact" style={{ padding: 50 }}>
        <Button>Get in Touch</Button>
      </Link>
    </Container>
  </Layout>
)

export default Services
