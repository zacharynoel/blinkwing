import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import BgImage from "components/BgImage"
import Button from "components/Button"
import PropTypes from "prop-types"

const LandingContainer = styled(`section`)`
  position: relative;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-around;
  align-items: center;
  height: 437px;
  padding: 3rem 0 0;

  h1,
  h2 {
    color: #ffffff;
    font-size: 29px;
    margin: 0 auto;
    text-align: center;
    padding: 0 15px;
  }

  h2 {
    font-size: 21px;
  }

  @media only screen and (min-width: 1200px) {
    height: 537px;
  }
`

const ImageCover = styled(`div`)`
  position: absolute;
  top: 0;
  height: 437px;
  width: 100vw;
  z-index: -1;
  background: rgb(22, 42, 62, 0.44);
  background: -moz-linear-gradient(
    0deg,
    rgba(22, 42, 62, 1) 0%,
    rgba(22, 42, 62, 0.35) 100%
  );
  background: -webkit-linear-gradient(
    0deg,
    rgba(22, 42, 62, 1) 0%,
    rgba(22, 42, 62, 0.35) 100%
  );
  background: linear-gradient(
    0deg,
    rgba(22, 42, 62, 1) 0%,
    rgba(22, 42, 62, 0.35) 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#162a3e",endColorstr="#162a3e",GradientType=1);

  @media only screen and (min-width: 1200px) {
    height: 537px;
  }
`

const ButtonsContainer = styled(`div`)`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 0 auto;
  width: 100%;
`

const CustomBgImage = styled(BgImage)`
  height: 437px !important;

  @media only screen and (min-width: 1200px) {
    height: 537px !important;
  }
`

const LandingSection = ({ image }) => (
  <LandingContainer>
    <CustomBgImage fluid={image.fluid} />
    <ImageCover />
    <h1>Modern, Fast, Responsive Websites</h1>
    <h2>Based in Fresno, we’re ready to build your next web project</h2>
    <ButtonsContainer>
      <Link to="/services" style={{ padding: 5 }}>
        <Button>Our Services</Button>
      </Link>
      <Link to="/contact" style={{ padding: 5 }}>
        <Button secondary>Contact Us</Button>
      </Link>
    </ButtonsContainer>
  </LandingContainer>
)

LandingSection.propTypes = {
  image: PropTypes.node.isRequired,
}

export default LandingSection
