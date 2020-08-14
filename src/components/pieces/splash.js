import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
// import { Img } from '../../utils/styles'
import { useStaticQuery, graphql, Link } from 'gatsby'

const Wrapper = styled.div`
  width: 100%;
  position: fixed;
  height: 100vh;
  z-index: -10;
  left: 0;
  margin: 0;
  top: 7vh;
`
const SplashImage = styled(Img)`
  position: relative;
  height: 100%;
  width: 100%;
`
const OverText = styled.h2`
  text-align: left;
  font-size: 5rem;
  width: 100vw;
  color: white;
  position: absolute;
  top: 40vh;
  left: 15vw;
  @media (max-width: 768px) {
    left: 0;
    text-align: center;
  }
  @media (max-width: 576px) {
    font-size: 2.5rem;
  }
`
const Links = styled(Link)`
  text-decoration: underline;
  color: white;
  font-size: 3rem;
  @media (max-width: 768px) {
    text-align: center;
  }
`
export const Splash = () => {
  const images = useStaticQuery(
    graphql`
      {
        splash: file(relativePath: { eq: "unsplash.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1066) {
              ...GatsbyImageSharpFluid_noBase64
            }
          }
        }
      }
    `
  )

  return (
    <Wrapper>
      <SplashImage fluid={images.splash.childImageSharp.fluid} />
      <OverText>
        New Kool Sunglasses: <br /> <Links> Shop Now</Links>{' '}
      </OverText>
    </Wrapper>
  )
}
