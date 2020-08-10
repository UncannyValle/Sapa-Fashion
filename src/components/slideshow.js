import React from 'react'
import styled from 'styled-components'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { Img } from '../utils/styles'
import Slider from 'react-slick'

//Styles
const Wrapper = styled.div`
  color: white;
  text-align: center;
  h2 {
    position: relative;
    top: 1rem;
    font-size: 5rem;

    display: inline-block;
    color: black;
  }
`
const Carousel = styled(Slider)`
  padding-top: 1.5rem;
  margin-bottom: 2rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);

  .links {
    transition: ease-in-out 0.2s all;
  }

  .slick-list {
    margin: 0 25px;
  }

  .slick-slide {
    box-sizing: border-box;
    margin: 0 auto;
    text-align:center;
    padding:0 1rem;
  }

  .slick-next {
    right: 0.5rem;
  }
  .slick-prev {
    left: 0.5rem;
  }
  .slick-dots {
    bottom: 0;
    left: 0;
  }

`
const Image = styled(Img)`
  border-radius: 50%;
  min-width: 100%;
  margin:0 auto;
`

const Slideshow = () => {
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
                    fluid(maxWidth: 400, maxHeight: 400) {
                      ...GatsbyImageSharpFluid_noBase64
                    }
                  }
                }
              }
            }
          }
        }
      }
    `
  )
  const settings = {
    dots: true,
    speed: 500,
    slidesToShow: 3,
    // adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  }
  return (
    <Wrapper>
      <h2>Featured Products</h2>
      <Carousel {...settings}>
        {allShopifyProduct.edges ? (
          allShopifyProduct.edges.map(
            ({
              node: {
                id,
                handle,
                title,
                images: [firstImage],
              },
            }) => (
              <Link className="links" to={`/product/${handle}/`} key={id}>
                {firstImage && firstImage.localFile && (
                  <Image
                    fluid={firstImage.localFile.childImageSharp.fluid}
                    alt={handle}
                  />
                )}
              </Link>
            )
          )
        ) : (
          <p>No Products found!</p>
        )}
      </Carousel>
    </Wrapper>
  )
}
export default Slideshow
