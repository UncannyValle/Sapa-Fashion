import React, { useContext, useLayoutEffect, useRef, useState } from 'react'
import reduce from 'lodash/reduce'
import PropTypes from 'prop-types'
import cart from '../../images/cart.svg'

import StoreContext from '~/context/StoreContext'
import { CartCounter, Container, MenuLink, Wrapper, Navbar } from './styles'
import Dropdown from './dropdown'

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

  //Shadow Effect
  const [shadow, setShadow] = useState(false)
  const ourRef = useRef(null)
  useLayoutEffect(() => {
    const topPos = element => element.getBoundingClientRect().top
    const headerPos = topPos(ourRef.current)

    const onScroll = () => {
      const scrollPosition = window.scrollY
      if (scrollPosition > headerPos + 1) {
        setShadow(true)
      } else setShadow(false)
    }
    window.addEventListener('scroll', onScroll)
  }, [])

  //Drop down menu logic

  return (
    <Wrapper ref={ourRef} animate={shadow}>
      <Container>
        <MenuLink className="main-title" to="/">
          {siteTitle}
        </MenuLink>
        <Navbar>
          <Dropdown title="Women's" />
          <MenuLink>Men's</MenuLink>
          <MenuLink>Children's</MenuLink>
          <MenuLink>Accessories</MenuLink>
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
