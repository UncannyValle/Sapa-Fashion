import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import SEO from '~/components/seo'
import ProductGrid from '~/components/ProductGrid'
import Slideshow from '../components/slideshow'
import { Splash } from '../components/pieces/splash'

const Title = styled.h1`
  text-align: center;
`
const MainContent = styled.div`
  margin: 100vh 0 0 0;
  background-color: white;
  padding: 3rem;
`

const IndexPage = () => (
  <>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Splash />
    <MainContent>
      <Slideshow />
      <ProductGrid />
      <Link to="/page-2/">Go to page 2</Link>
    </MainContent>
  </>
)

export default IndexPage
