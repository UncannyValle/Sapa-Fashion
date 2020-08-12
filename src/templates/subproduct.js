import React, { useContext } from 'react'
import styled from 'styled-components'
import { graphql, Link } from 'gatsby'

import StoreContext from '~/context/StoreContext'
import {
  Grid,
  Product,
  Title,
  PriceTag,
} from '../components/ProductGrid/styles'
import { Img } from '~/utils/styles'


const ProductGrid = styled(Grid)`
`
const TheTitle = styled.h1`
  font-size: 3.5rem;
`
const Subtext = styled.h2`
  font-weight: 800;
`
const WomenSection = ({ data, location }) => {
  const allShopifyProduct = data.allShopifyProduct
  const {
    store: { checkout },
  } = useContext(StoreContext)

  //   const section = location.state.section

  const getPrice = price =>
    Intl.NumberFormat(undefined, {
      currency: checkout.currencyCode ? checkout.currencyCode : 'USD',
      minimumFractionDigits: 2,
      style: 'currency',
    }).format(parseFloat(price ? price : 0))

  return (
    <>
      <TheTitle>{location.state ? location.state.tagFromLink : null} </TheTitle>
      <ProductGrid>
        {allShopifyProduct.edges ? (
          allShopifyProduct.edges.map(
            ({
              node: {
                id,
                handle,
                title,
                images: [firstImage],
                variants: [firstVariant],
              },
            }) => {
              //if (tags.includes(section)) {
              return (
                <Product key={id}>
                  <Link to={`/product/${handle}/`}>
                    {firstImage && firstImage.localFile && (
                      <Img
                        fluid={firstImage.localFile.childImageSharp.fluid}
                        alt={handle}
                        objectFit="cover"
                        objectPosition="50% 50%"
                      />
                    )}
                  </Link>
                  <Title>{title}</Title>
                  <PriceTag>{getPrice(firstVariant.price)}</PriceTag>
                </Product>
              )
            }
            //}
          )
        ) : (
          <p>No Products found!</p>
        )}
      </ProductGrid>
    </>
  )
}

export const query = graphql`
  query($tag: String) {
    allShopifyProduct(
      sort: { order: DESC, fields: createdAt }
      filter: { tags: { eq: $tag } }
    ) {
      edges {
        node {
          id
          title
          handle
          createdAt
          tags
          images {
            id
            originalSrc
            localFile {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
          }
          variants {
            price
          }
        }
      }
    }
  }
`

export default WomenSection
