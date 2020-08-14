import React from 'react'

import Cart from '~/components/Cart'
import { Container } from '~/utils/styles'
import styled from 'styled-components'


const Title = styled.h1`
  font-size: 3rem;
`
const CartPage = () => (
  <Container>
    <Title>Shopping Cart</Title>
    <Cart />
  </Container>
)

export default CartPage
