import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ContactForm from "components/ContactForm"
import Container from "components/Container"

const Contact = () => (
  <Layout>
    <SEO title="Contact" />
    <Container
      title="Get In Touch"
      style={{
        background: `#162a3e`,
        color: `white`,
      }}
      contact
    >
      <p>
        <b>Send us a message!</b> If you&apos;re interested in working with us
        or if you have any questions about our services or process, then please
        fill out the form below and we&apos;ll get back to you as soon as we
        can.
        <br />
        <br />
        We typically respond within a single business day.
        <br />
      </p>

      <ContactForm />
    </Container>
  </Layout>
)

export default Contact
