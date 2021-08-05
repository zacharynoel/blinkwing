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
  height: 500px;

  h1,
  h2 {
    color: #ffffff;
    font-size: 2rem;
    margin: 1rem auto;
    text-align: center;
    padding: 0 15px;
  }

  h2 {
    font-size: 1.5rem;
  }
`

const ImageCover = styled(`div`)`
  position: absolute;
  top: 0;
  height: 500px;
  width: 100vw;
  z-index: -1;
  background: rgb(22, 42, 62, 0.7);
  background: -moz-linear-gradient(
    0deg,
    rgba(22, 42, 62, 0.7) -10%,
    rgba(22, 42, 62, 0.7) 10%
  );
  background: -webkit-linear-gradient(
    0deg,
    rgba(22, 42, 62, 0.7) -10%,
    rgba(22, 42, 62, 0.7) 10%
  );
  background: linear-gradient(
    0deg,
    rgba(22, 42, 62, 0.7) -10%,
    rgba(22, 42, 62, 0.7) 10%
  );
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#162a3e",endColorstr="#162a3e",GradientType=1);
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
  height: 500px !important;
`

const LandingSection = ({ image }) => (
  <LandingContainer>
    <CustomBgImage fluid={image.fluid} objectPosition={"50% 70%"} />
    <ImageCover />
    <div>
      <h1>Modern, Fast, Responsive Websites</h1>
      <h2>Based in Fresno, we’re ready to build your next web project</h2>
    </div>
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
  image: PropTypes.object.isRequired,
}

export default LandingSection
