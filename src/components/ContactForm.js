import React, { useState } from "react"
import styled from "styled-components"

import Button from "components/Button"

const Error = styled(`p`)`
  color: #cc0000 !important;
  margin: 0 0 -1.1rem !important;
  padding: 3px 0 0 !important;
`

const initState = {
  name: "",
  email: "",
  message: "",
}

const initErrors = {
  name: false,
  email: false,
  message: false,
}

const ContactForm = () => {
  const [name, setName] = useState(initState.name)
  const [email, setEmail] = useState(initState.email)
  const [message, setMessage] = useState(initState.message)
  const [error, setError] = useState(initErrors)

  const onNameChange = e => {
    setName(e.target.value)
  }

  const onEmailChange = e => {
    setEmail(e.target.value)
  }

  const onMessageChange = e => {
    setMessage(e.target.value)
  }

  const validateInput = () => {
    let valid = true
    let newErrors = initErrors

    if (name.length === 0 || name === "") {
      valid = false
      newErrors = { ...newErrors, name: true }
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      valid = false
      newErrors = { ...newErrors, email: true }
    }

    if (message.length === 0 || message === "") {
      valid = false
      newErrors = { ...newErrors, message: true }
    }

    setError({ ...newErrors })

    return valid
  }

  const onSubmit = e => {
    if (!validateInput()) {
      e.preventDefault()
    }
  }

  return (
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
        <input type="text" name="name" value={name} onChange={onNameChange} />
        {error.name && (
          <Error className="error">Name field cannot be empty</Error>
        )}
      </label>

      <label>
        Email Address
        <input
          type="text"
          name="email"
          value={email}
          onChange={onEmailChange}
        />
        {error.email && <Error className="error">Invalid Email Format</Error>}
      </label>

      <label>
        Message
        <textarea name="message" value={message} onChange={onMessageChange} />
        {error.message && (
          <Error className="error">Message field cannot be empty</Error>
        )}
      </label>

      <Button style={{ margin: "1rem auto 0.5rem" }} onClick={onSubmit}>
        Submit
      </Button>
    </form>
  )
}

export default ContactForm
