import React from 'react'
import styled from 'styled-components'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { Img } from '../utils/styles'
import test from '../images/gatsby-astronaut.png'
import Slider from 'react-slick'

//Styles
const Carousel = styled(Slider)`
  height: auto;
  width: 100%;
  margin: 2rem auto;
  background-color: maroon;
  padding: 2rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);

  .links {
    transition: ease-in-out 0.2s all;
  }
  .links:hover {
  }
  img {
    border-radius: 50%;
    width: 100px;
  }
  .slick-slide {
    width: 150px;
  }
  .slick-list {
    width: 80%;
    margin: 0 auto;
  }
  .slick-next {
    right: 2rem;
  }
  .slick-prev {
    left: 2rem;
  }
`

const Slideshow = props => {
  // const { store: {checkout} } = useContext(StoreContext)

  const { allShopifyProduct } = useStaticQuery(
    graphql`
      query {
        allShopifyProduct(sort: { fields: [createdAt], order: DESC }) {
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
                    fluid(maxWidth: 400, maxHeight:400) {
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
  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: false,
    centerPadding: '20%',
  }
  return (
    <Carousel {...settings}>
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
            <Link className="links" to={`/product/${handle}/`} key={id}>
              {firstImage && firstImage.localFile && (
                <Img
                  fluid={firstImage.localFile.childImageSharp.fluid}
                  alt={handle}
                  imgStyle={{ objectFit: 'contain' }}
                />
              )}
            </Link>
          )
        )
      ) : (
        <p>No Products found!</p>
      )}
    </Carousel>
  )
}
export default Slideshow
