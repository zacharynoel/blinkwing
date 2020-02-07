import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const ContainerStyle = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  font-family: "Montserrat", sans-serif;
  color: #162a3e;
  justify-content: space-around;
  flex-wrap: nowrap;
  padding: 1rem;

  ${({ secondary }) => secondary && "background-color: #EDEDED;"}
`

const Container = ({ title, secondary, children, ...props }) => (
  <ContainerStyle {...props} secondary={secondary}>
    <h1 style={{ paddingBottom: `1rem` }}>{title}</h1>
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
