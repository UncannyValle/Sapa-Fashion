import React, { useContext } from 'react'

import StoreContext from '~/context/StoreContext'
import LineItem from './LineItem'
import styled from 'styled-components'

const Cart = () => {
  const {
    store: { checkout },
  } = useContext(StoreContext)

  const handleCheckout = () => {
    window.open(checkout.webUrl)
  }

  const lineItems = checkout.lineItems.map(item => (
    <LineItem key={item.id.toString()} item={item} />
  ))

  //Styles
  const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    button {
      background: #25ccde;
      border-radius: 50px;
      border: none;
      padding: 1rem 1.5rem;
      font-size: 1.2rem;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
      transition: all 200ms ease-in-out;
      width: 200px;
      color: white;
      &:hover {
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19),
          0 6px 6px rgba(0, 0, 0, 0.23);
        cursor: pointer;
      }
    }
  `
  const SubTotal = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin: 5rem;
    h2 {
      font-size: 2rem;
      text-decoration: underline;
    }
    p {
      font-weight: 800;
      border: solid 3px black;
      border-radius: 25px;
      padding: .5rem;
    }
    @media (max-width: 576px) {
      flex-wrap: wrap;
    }
  `
  return (
    <Wrapper>
      {lineItems}
      <SubTotal>
        <h2>Subtotal: </h2>
        <p>$ {checkout.subtotalPrice}</p>
        <br />

        {/* <br />
      <h2>Total</h2>
      <p>$ {checkout.totalPrice}</p>
      <br /> */}
        <button
          onClick={handleCheckout}
          disabled={checkout.lineItems.length === 0}
        >
          Check out
        </button>
      </SubTotal>
    </Wrapper>
  )
}

export default Cart
