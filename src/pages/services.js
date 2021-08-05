import React from "react"

import Layout from "components/layout"
import SEO from "components/seo"
import ServicesContainer from "components/ServicesContainer"
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

    <Container title="How Can We Help?">
      <div
        style={{
          display: `flex`,
          flexFlow: `row wrap`,
          maxWidth: `775px`,
          width: `100%`,
          justifyContent: `space-between`,
        }}
      >
        <ServicesContainer title="Here's the Blinkwing Method" tab="Services">
          <BulletList type={2} list={METHODS_LIST} />
        </ServicesContainer>

        <ServicesContainer title="What We Offer" tab="Services">
          <BulletList
            list={SERVICES_LIST}
            style={{ width: "100%", textAlign: "left" }}
          />
        </ServicesContainer>
      </div>

      <ServicesContainer title="Pricing" banner notab style={{ margin: "0" }}>
        <p style={{ paddingTop: 0 }}>
          Pricing is determined by the size and scope of your project, however
          our starting prices are listed here:
        </p>
        <p>
          Website design/development <b>starting from $500</b>
        </p>
        <p>
          Website hosting <b>starting from $50/month</b>
        </p>
        <p>
          Logo design <b>starting from $200</b>
        </p>
        <p>
          {`If you have any questions about our pricing or want an exact quote,
        please contact us so that we can discuss your project's needs.`}
        </p>
        <Link to="/contact" style={{ margin: "10px 0", maxWidth: "100%" }}>
          <Button secondary style={{ margin: "1rem auto" }}>
            {`Get in Touch`}
          </Button>
        </Link>
      </ServicesContainer>
    </Container>
  </Layout>
)

export default Services
