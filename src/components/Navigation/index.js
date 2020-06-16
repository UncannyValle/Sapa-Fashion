import React, { useContext } from 'react'
import reduce from 'lodash/reduce'
import PropTypes from 'prop-types'
import cart from '../../images/cart.svg'

import StoreContext from '~/context/StoreContext'
import { CartCounter, Container, MenuLink, Wrapper, Navbar } from './styles'

const useQuantity = () => {
  const {
    store: { checkout },
  } = useContext(StoreContext)
  const items = checkout ? checkout.lineItems : []
  const total = reduce(items, (acc, item) => acc + item.quantity, 0)
  return [total !== 0, total]
}

const Navigation = ({ siteTitle }) => {
  const [hasItems, quantity] = useQuantity()

  return (
    <Wrapper>
      <Container>
        <MenuLink className="main-title" to="/">
          {siteTitle}
        </MenuLink>
        <Navbar>
          <MenuLink>Women's</MenuLink>
          <MenuLink>Men's</MenuLink>
          <MenuLink>Children's</MenuLink>
          <MenuLink to="/cart">
            {hasItems && <CartCounter>{quantity}</CartCounter>}
            <img src={cart} alt="shopping cart" className="cart" />
          </MenuLink>
        </Navbar>
      </Container>
    </Wrapper>
  )
}

Navigation.propTypes = {
  siteTitle: PropTypes.string,
}

Navigation.defaultProps = {
  siteTitle: ``,
}

export default Navigation
