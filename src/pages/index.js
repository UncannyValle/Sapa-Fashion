import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import SEO from '~/components/seo'
import ProductGrid from '~/components/ProductGrid'
import Slideshow from '../components/slideshow'

const Title = styled.h1`
  text-align:center;
  
` 

const IndexPage = () => (
  <>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Title>The Best Styles of the Season</Title>
    <Slideshow />
    <ProductGrid />
    <Link to="/page-2/">Go to page 2</Link>
  </>
)

export default IndexPage
