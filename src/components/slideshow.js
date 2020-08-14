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
  /* @media (max-width: 1024px) {
    display: none;
  } */
`
const Carousel = styled(Slider)`
  padding-top: 1.5rem;
  margin-bottom: 2rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);

  .links {
    transition: ease-in-out 0.2s all;
    text-align: center;
  }

  .slick-list {
    margin: 0 25px;
  }
  .slick-arrow {
    background-color: black;
    border-radius: 50%;
    width: 50px;
    height: 50px;
  }
  .slick-slider {
  }
  .slick-slide {
    box-sizing: border-box;
    /* margin: 0 auto; */
    text-align: center;
    /* padding: 0 1rem; */
  }

  .slick-next {
  }
  .slick-prev {
    right: 1.8rem;
  }
  .slick-dots {
    bottom: 0;
    left: 0;
  }
`
const Image = styled(Img)`
  border-radius: 50%;
  @media (max-width: 1024px) {
    width: 200px;
    height: 200px;
  }
`

const Slideshow = () => {
  const { allShopifyProduct } = useStaticQuery(
    graphql`
      query {
        allShopifyProduct(
          sort: { fields: [createdAt], order: DESC }
          filter: { tags: { eq: "Women" } }
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
    speed: 500,
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnFocus: true,
    adaptiveHeight: true,
    variableWidth: true,
    infinite: true,
    // centerMode:true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          variableWidth: false,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          variableWidth: false,
          arrows: false,
        },
      },
    ],
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
