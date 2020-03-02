import React from "react"
import PropTypes from "prop-types"
import styled, { css } from "styled-components"

const ContainerStyle = styled.section`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: flex-start;
  flex-flow: column nowrap;
  width: 100%;
  max-width: 500px;
  min-height: 400px;
  font-family: "Montserrat", sans-serif;
  background-color: white;
  ${({ notab }) => !notab && "padding-top: 1rem;"}
  padding: 3rem 2rem 2rem;
  margin: 1rem 0 0;
  ${({ banner }) => !banner && "margin: 1rem auto 1rem;"}

  box-shadow: 3px 5px 10px rgba(0, 0, 0, 0.35);
  border-radius: 15px;

  h4 {
    color: white;
    font-weight: 600;
  }

  h2 {
    padding-bottom: 2rem;
  }

  p {
    max-width: 500px;
    color: white;
    margin: 0 auto;
    width: 100%;
  }

  @media only screen and (min-width: 800px) {
    max-width: 370px;
    margin: 1rem 0;
    padding: 3rem 1rem 2rem;
  }

  ${({ banner }) =>
    banner &&
    css`
      color: white;
      justify-content: space-around;

      h2 {
        color: white;
      }

      background: rgb(74, 101, 128);
      background: -moz-linear-gradient(
        135deg,
        rgba(74, 101, 128, 1) 0%,
        rgba(22, 42, 62, 1) 100%
      );
      background: -webkit-linear-gradient(
        135deg,
        rgba(74, 101, 128, 1) 0%,
        rgba(22, 42, 62, 1) 100%
      );
      background: linear-gradient(
        135deg,
        rgba(74, 101, 128, 1) 0%,
        rgba(22, 42, 62, 1) 100%
      );
      filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#4a6580",endColorstr="#162a3e",GradientType=1);

      @media only screen and (min-width: 800px) {
        max-width: 775px;
        margin: 1rem 0 0;
      }
    `}
`

const Bar = styled(`div`)`
  background: #162a3e;
  position: absolute;
  top: 0;
  width: 100%;
  border-radius: 15px 15px 0 0;
  text-align: center;
  padding: 0.5rem 0;
`

const ServicesContainer = ({
  title,
  clarifier,
  banner,
  tab,
  notab,
  children,
  ...props
}) => (
  <ContainerStyle banner={banner} {...props}>
    {!notab && (
      <Bar notab={notab}>
        <h4>{tab}</h4>
      </Bar>
    )}
    <h2>
      {title}
      <div style={{ fontSize: `0.9rem`, lineHeight: 0, paddingTop: 5 }}>
        {clarifier}
      </div>
    </h2>
    {children}
  </ContainerStyle>
)

ServicesContainer.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  clarifier: PropTypes.string.isRequired,
  banner: PropTypes.bool.isRequired,
  tab: PropTypes.string.isRequired,
  notab: PropTypes.bool.isRequired,
}

ServicesContainer.defaultProps = {
  title: "",
  clarifier: "",
  banner: false,
  tab: "",
  notab: false,
}

export default ServicesContainer
