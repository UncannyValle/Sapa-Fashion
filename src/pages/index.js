import React from 'react'
// import { Link } from 'gatsby'
import styled from 'styled-components'
import SEO from '~/components/seo'
import Slideshow from '../components/slideshow'
import { Splash } from '../components/pieces/splash'

// const Title = styled.h1`
//   text-align: center;
// `
const MainContent = styled.div`
  margin: 100vh 0 0 0;
  background-color: white;
  padding: 3rem;
`
const About = styled.div`
  h1 {
    text-align: center;
    font-size: 3rem;
  }
  p {
    text-align: left;
    width: 60%;
    margin: 0 auto;
    font-size: 1.5rem;
    line-height: 2.25rem;
  }
  @media (max-width: 768px) {
    p {
      width: 90%;
    }
  }
`

const IndexPage = () => (
  <>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Splash />
    <MainContent>
      <Slideshow />
      <About>
        <h1>About Us</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore ipsum
          repudiandae nulla totam quam, error earum, dignissimos architecto
          soluta esse odio, rem necessitatibus non voluptatum libero eum. Iusto
          voluptatem numquam incidunt laborum omnis, recusandae beatae possimus
          repellat ad explicabo voluptatibus soluta aspernatur corporis,
          adipisci in. Assumenda ex distinctio amet porro?
        </p>
      </About>
    </MainContent>
  </>
)

export default IndexPage
