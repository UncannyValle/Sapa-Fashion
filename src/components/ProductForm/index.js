import React, { useState, useContext, useEffect, useCallback } from 'react'
import find from 'lodash/find'
import isEqual from 'lodash/isEqual'
import PropTypes from 'prop-types'

import StoreContext from '~/context/StoreContext'
import styled from 'styled-components'

const Button = styled.button`
  background: #25ccde;
  border-radius: 50px;
  border: none;
  padding: 1rem 1.5rem;
  font-size: 1.2rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  font-weight: 800;
  color: white;
  transition: all 200ms ease-in-out;
  &:hover {
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
    cursor: pointer;
  }

  @media (max-width: 768px) {
    font-size: 0.8rem;
    padding: 0.5rem 0.75rem;
    margin: 0.5rem auto;
  }
  @media (max-width: 576px) {
    margin: 0.5rem auto;
  }
`
const Quantity = styled.input`
  width: 50px;
  text-align: center;
  margin: 1rem 0;
`
const Wrapper = styled.div`
  /* padding-bottom: 2rem; */
`
const ProductForm = ({ product }) => {
  const {
    options,
    variants,
    variants: [initialVariant],
    priceRange: { minVariantPrice },
  } = product
  const [variant, setVariant] = useState({ ...initialVariant })
  const [quantity, setQuantity] = useState(1)
  const {
    addVariantToCart,
    store: { client, adding },
  } = useContext(StoreContext)

  const productVariant =
    client.product.helpers.variantForOptions(product, variant) || variant
  const [available, setAvailable] = useState(productVariant.availableForSale)

  const checkAvailability = useCallback(
    productId => {
      client.product.fetch(productId).then(fetchedProduct => {
        // this checks the currently selected variant for availability
        const result = fetchedProduct.variants.filter(
          variant => variant.id === productVariant.shopifyId
        )
        if (result.length > 0) {
          setAvailable(result[0].available)
        }
      })
    },
    [client.product, productVariant.shopifyId, variants]
  )

  useEffect(() => {
    checkAvailability(product.shopifyId)
  }, [productVariant, checkAvailability, product.shopifyId])

  const handleQuantityChange = ({ target }) => {
    setQuantity(target.value)
  }

  // const handleOptionChange = (optionIndex, { target }) => {
  //   const { value } = target
  //   const currentOptions = [...variant.selectedOptions]

  //   currentOptions[optionIndex] = {
  //     ...currentOptions[optionIndex],
  //     value,
  //   }

  //   const selectedVariant = find(variants, ({ selectedOptions }) =>
  //     isEqual(currentOptions, selectedOptions)
  //   )

  //   setVariant({ ...selectedVariant })
  // }

  const handleAddToCart = () => {
    addVariantToCart(productVariant.shopifyId, quantity)
    alert(`Item added to cart`)
  }

  /* 
  Using this in conjunction with a select input for variants 
  can cause a bug where the buy button is disabled, this 
  happens when only one variant is available and it's not the
  first one in the dropdown list. I didn't feel like putting 
  in time to fix this since its an edge case and most people
  wouldn't want to use dropdown styled selector anyways - 
  at least if the have a sense for good design lol.
  */

  // const checkDisabled = (name, value) => {
  //   const match = find(variants, {
  //     selectedOptions: [
  //       {
  //         name: name,
  //         value: value,
  //       },
  //     ],
  //   })
  //   if (match === undefined) return true
  //   if (match.availableForSale === true) return false
  //   return true
  // }

  const price = Intl.NumberFormat(undefined, {
    currency: minVariantPrice.currencyCode,
    minimumFractionDigits: 2,
    style: 'currency',
  }).format(variant.price)

  return (
    <Wrapper>
      <h3>Price: {price}</h3>
      {options.map(({ id, name, values }, index) => (
        <React.Fragment key={id}>
          {/* <label htmlFor={name}>{name} </label> */}
          {/* <select
            name={name}
            key={id}
            onChange={event => handleOptionChange(index, event)}
          >
            {values.map(value => (
              <option
                value={value}
                key={`${name}-${value}`}
                disabled={checkDisabled(name, value)}
              >
                {value}
              </option>
            ))}
          </select> */}
          <br />
        </React.Fragment>
      ))}
      <label htmlFor="quantity">Quantity: </label>
      <Quantity
        type="number"
        id="quantity"
        name="quantity"
        min="1"
        step="1"
        onChange={handleQuantityChange}
        value={quantity}
      />
      <br />
      <Button
        type="submit"
        disabled={!available || adding}
        onClick={handleAddToCart}
      >
        Add to Cart
      </Button>
      {!available && <p>This Product is out of Stock!</p>}
    </Wrapper>
  )
}

ProductForm.propTypes = {
  product: PropTypes.shape({
    descriptionHtml: PropTypes.string,
    handle: PropTypes.string,
    id: PropTypes.string,
    shopifyId: PropTypes.string,
    images: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        originalSrc: PropTypes.string,
      })
    ),
    options: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        name: PropTypes.string,
        values: PropTypes.arrayOf(PropTypes.string),
      })
    ),
    productType: PropTypes.string,
    title: PropTypes.string,
    variants: PropTypes.arrayOf(
      PropTypes.shape({
        availableForSale: PropTypes.bool,
        id: PropTypes.string,
        price: PropTypes.string,
        title: PropTypes.string,
        shopifyId: PropTypes.string,
        selectedOptions: PropTypes.arrayOf(
          PropTypes.shape({
            name: PropTypes.string,
            value: PropTypes.string,
          })
        ),
      })
    ),
  }),
  addVariantToCart: PropTypes.func,
}

export default ProductForm
