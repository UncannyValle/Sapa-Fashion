import React, { useContext } from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql, Link } from 'gatsby'

import StoreContext from '~/context/StoreContext'
import {
  Grid,
  Product,
  Title,
  PriceTag,
} from '../../components/ProductGrid/styles'
import { Img } from '~/utils/styles'

const Wrapper = styled.main`
  margin-top: 7rem;
  text-align: center;
  h1 {
    font-size: 5rem;
  }
`

const WomenSection = () => {
  const {
    store: { checkout },
  } = useContext(StoreContext)

  //Queries just for the tag: Women

  const { allShopifyProduct } = useStaticQuery(
    graphql`
      query {
        allShopifyProduct(
          filter: { tags: { eq: "Tops" } }
          sort: { order: ASC, fields: title }
        ) {
          edges {
            node {
              id
              title
              handle
              createdAt
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
  )

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
            }) => (
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
          )
        ) : (
          <p>No Products found!</p>
        )}
      </Grid>
    </Wrapper>
  )
}
export default WomenSection
