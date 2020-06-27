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

const Wrapper = styled.main`
  margin-top: 7rem;
  text-align: center;
  h1 {
    font-size: 5rem;
  }
`

const WomenSection = ({ data }) => {
  const allShopifyProduct = data.allShopifyProduct
  const {
    store: { checkout },
  } = useContext(StoreContext)

  //   const section = location.state.section
  //Queries just for the tag: Women

  const getPrice = price =>
    Intl.NumberFormat(undefined, {
      currency: checkout.currencyCode ? checkout.currencyCode : 'USD',
      minimumFractionDigits: 2,
      style: 'currency',
    }).format(parseFloat(price ? price : 0))

  return (
    <Wrapper>
      <h1>All Women's </h1>
      <h2>Come check out our newest styles!</h2>
      <Grid>
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
      </Grid>
    </Wrapper>
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
