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

  h2 {
    text-align: center;
  }
  h2,
  p {
    padding: 1rem 0;
    margin: 0 auto;
    max-width: 500px;
  }
`

const Container = ({ title, secondary, children, ...props }) => (
  <ContainerStyle {...props} secondary={secondary}>
    <h2>{title}</h2>
    {children}
  </ContainerStyle>
)

Container.propTypes = {
  secondary: PropTypes.bool.isRequired,
  children: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

Container.defaultProps = {
  secondary: false,
  title: ``,
}

export default Container
