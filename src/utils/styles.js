import Image from 'gatsby-image'
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
  width: 15rem;
  height: 15rem;
  margin: 0 2rem 1.5rem;
  padding: 2rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: 0.2s ease-in-out;
  &:hover {
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  }
  @media (max-width: 1024px) {
    margin: 0 auto;
  }
  @media (max-width: 768px) {
    margin: 0 auto;
    height: 17rem;
    width: 17rem;
  }
  @media (max-width: 576px) {
    margin: 0 auto;
    height: 19rem;
    width: 19rem;
  }
`

export const Container = styled.div`
  max-width: 1066px;
`

export const TwoColumnGrid = styled.div`
         display: grid;
         grid-template-columns: 1fr 2rem 1fr;
         grid-template-rows: 1auto;
         grid-template-areas: 'left . right';
         padding: 5rem 0;

         @media (max-width: ${breakpoints.l}px) {
           display: block;
         }
       `

export const GridLeft = styled.div`
  grid-area: left;
  height: auto;
`

export const GridRight = styled.div`
  grid-area: right;
`

export const MainContent = styled.main`
  margin: 17vh auto 0;
  /* width: 100%; */
  text-align: center;
  position: relative;
  min-height: 83vh;

  @media (max-width: ${breakpoints.l}px) {
    margin-top: 15vh;
    min-height: 85vh;
  }
`
