import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import "typeface-montserrat"

const ButtonContainer = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #3c7bba;
  border: 2px solid #3c7bba;
  border-radius: 14px;
  color: white;

  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 1.3em;
  width: 19rem;
  max-width: calc(100vw - 20px);
  padding: 13px 0;
  margin: 0 auto;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.6);
  outline: none;
  cursor: pointer;

  ${({ secondary }) => secondary && "background-color: white;"}
  ${({ secondary }) => secondary && "color: #3C7BBA;"}
`

const Button = ({ secondary, children, ...props }) => {
  return (
    <ButtonContainer {...props} secondary={secondary}>
      {children}
    </ButtonContainer>
  )
}

Button.propTypes = {
  secondary: PropTypes.bool.isRequired,
  children: PropTypes.string.isRequired,
}

Button.defaultProps = {
  secondary: false,
}

export default Button
