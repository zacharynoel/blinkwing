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
  padding: 1rem;
  margin: 0 auto;

  ${({ secondary }) => secondary && "background-color: #EDEDED;"}
  ${({ contact }) => contact && "h2, p {color: white;}"}
  ${({ noTitle }) => noTitle && "h2 {display: none;"}

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

const Container = ({
  title,
  secondary,
  noTitle,
  contact,
  children,
  ...props
}) => (
  <ContainerStyle
    {...props}
    secondary={secondary}
    contact={contact}
    noTitle={noTitle}
  >
    <h2>{title}</h2>
    {children}
  </ContainerStyle>
)

Container.propTypes = {
  secondary: PropTypes.bool.isRequired,
  contact: PropTypes.bool.isRequired,
  noTitle: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
}

Container.defaultProps = {
  secondary: false,
  contact: false,
  noTitle: false,
  title: "",
}

export default Container
