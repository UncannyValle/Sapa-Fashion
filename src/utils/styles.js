import Image from 'gatsby-image'
import styled from '@emotion/styled'
import { createGlobalStyle } from 'styled-components'

export const breakpoints = {
  s: 576,
  m: 768,
  l: 992,
  xl: 1200,
}

export const GlobalStyle = createGlobalStyle`
    *, *:before, *:after {
    box-sizing: border-box;
  }
      body {
        margin: 0;
        background-color: white;

      }
      html {
        font-family: "Roboto";
        -ms-text-size-adjust: 100%;
        -webkit-text-size-adjust: 100%;
      }
      h1 {
        font-family: "Niconne";
        margin: 1rem 0;
      }
       h2,h3,h4,h5, a {
        font-family: "Cormorant";
      }
    `

export const Img = styled(Image)`
  max-width: 100%;
  margin-left: 0;
  margin-right: 0;
  margin-top: 0;
  padding: 2rem;
  margin-bottom: 1.45rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: 0.2s ease-in-out;
  &:hover {
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  }
`

export const Container = styled.div`
  /* max-width: 1066px; */
`

export const TwoColumnGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 2rem 1fr;
  grid-template-rows: 1auto;
  grid-template-areas: 'left . right';

  @media (max-width: ${breakpoints.l}px) {
    display: block;
  }
`

export const GridLeft = styled.div`
  grid-area: left;
`

export const GridRight = styled.div`
  grid-area: right;
`

export const MainContent = styled.main`
  margin-top: 80px;
  width: 100%;

  @media (max-width: ${breakpoints.l}px) {
    margin-top: 40px;
    margin-bottom: 20px;
  }
`
