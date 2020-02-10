import React from "react"
import Button from "components/Button"

const ContactForm = () => (
  <form
    name="contact"
    method="post"
    data-netlify="true"
    data-netlify-honeypot="bot-field"
    style={{
      display: `flex`,
      flexDirection: `column`,
      width: `100%`,
    }}
  >
    <input type="hidden" name="bot-field" />
    <input type="hidden" name="form-name" value="contact" />

    <label>
      Name / Business Name
      <input type="text" name="name" />
    </label>

    <label>
      Email Address
      <input type="text" name="email" />
    </label>

    <label>
      Message
      <textarea name="message" />
    </label>

    <Button style={{ margin: "1rem auto 0.5rem" }}>Submit</Button>
  </form>
)

export default ContactForm
