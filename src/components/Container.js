import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const ContainerStyle = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  font-family: "Montserrat", sans-serif;
  justify-content: space-around;
  flex-wrap: nowrap;
  padding: 1rem 3rem;

  ${({ secondary }) => secondary && "background-color: #EDEDED;"}
  ${({ contact }) => contact && "h2, p {color: white;}"}

  h2 {
    text-align: center;
  }
  h2,
  p,
  form {
    padding: 1rem 0;
    margin: 0 auto;
    max-width: 500px;
  }

  label {
    display: flex;
    flex-direction: column;
    padding: 1rem 0;
  }

  input,
  textarea {
    padding: 0.5rem;
  }

  textarea {
    height: 8rem;
  }
`

const Container = ({ title, secondary, contact, children, ...props }) => (
  <ContainerStyle {...props} secondary={secondary} contact={contact}>
    <h2>{title}</h2>
    {children}
  </ContainerStyle>
)

Container.propTypes = {
  secondary: PropTypes.bool.isRequired,
  contact: PropTypes.bool.isRequired,
  children: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

Container.defaultProps = {
  secondary: false,
  contact: false,
  title: ``,
}

export default Container
