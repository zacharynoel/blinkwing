import React from "react"

import Layout from "components/layout"
import SEO from "components/seo"
import Container from "components/Container"
import Button from "components/Button"
import { Link } from "gatsby"
import BulletList from "components/BulletList"

const METHODS_LIST = [
  "You define the requirements for your project, we provide a quote for the price and timeframe. We also discuss plans for domain registration and hosting your website.",
  "Once we come to an agreement, a contract is formed and we begin our work.",
  "As we design your product, you will see the progress after each milestone - from wireframing to the full design.",
  "After the full design is approved, we begin development.",
  "Once your project is complete and final approval is given, your site is launched!",
]

const SERVICES_LIST = [
  "Web Design and Development",
  "Web Hosting",
  "SEO Services",
  "eCommerce",
  "Content Management System",
  "Logo Design and Rebranding",
  "Software Consulting",
]

const Services = () => (
  <Layout>
    <SEO title="Services" />
    <Container title="Services" style={{ maxWidth: 500 }}>
      <h3
        style={{ padding: `1rem 0 1.5rem` }}
      >{`Here's the Blinkwing Method`}</h3>

      <BulletList type={2} list={METHODS_LIST} />

      <h3 style={{ padding: `2rem 0 1.5rem` }}>What We Offer</h3>

      <BulletList
        list={SERVICES_LIST}
        style={{ width: "100%", textAlign: "left" }}
      />
    </Container>

    <Container title="Pricing" style={{ maxWidth: 500 }}>
      <p style={{ maxWidth: 500, fontSize: 16 }}>
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
        {`If you have any questions about our pricing or want an exact quote,
        please contact us so that we can discuss your project's needs.`}
      </p>

      <Link to="/contact" style={{ margin: "30px auto" }}>
        <Button>Get in Touch</Button>
      </Link>
    </Container>
  </Layout>
)

export default Services
