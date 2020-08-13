import React, { useContext, useLayoutEffect, useRef, useState } from 'react'
import reduce from 'lodash/reduce'
import PropTypes from 'prop-types'
import cart from '../../images/cart.svg'
import NavBig from './navBig'
import StoreContext from '~/context/StoreContext'
import { CartCounter, MenuLink } from './styles'
import Dropdown from './dropdown'
import styled from 'styled-components'
import NavSmall from './navSmall'

const useQuantity = () => {
  const {
    store: { checkout },
  } = useContext(StoreContext)
  const items = checkout ? checkout.lineItems : []
  const total = reduce(items, (acc, item) => acc + item.quantity, 0)
  return [total !== 0, total]
}
//Styles
const Wrapper = styled.header`
  background: white;
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  top: 0;
  width: 100%;
  z-index: 1000;

  box-shadow: ${({ animate }) =>
    animate
      ? '1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)'
      : 'none'};
  transition: all 200ms ease-in;
  @media (max-width: 768px) {
    padding: 0.5rem 1rem;
  }
`
const MainTitle = styled(MenuLink)`
  font-size: 3rem;
  font-weight: bold;
  font-family: 'Niconne';
  padding: 0 1rem;
  @media (max-width: 768px) {
    font-size: 2rem;
    text-align: center;
    h3 {
      font-size: 1rem;
    }
  }
`
const RightNav = styled.div`
  display: flex;
  
`
const Cart = styled(MenuLink)`
  img {
    height: 2rem;
    width: auto;
  }
  @media (max-width: 768px) {
    margin-right:3rem;
  }
`

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

  return (
    <Wrapper ref={ourRef} animate={shadow}>
      <MainTitle to="/">
        {siteTitle}
        <h3>Styles for every occasion</h3>
      </MainTitle>

      {/* The main navigation starts here with the dropdown */}
      <RightNav>
        <NavBig />
        <Cart to="/cart">
          {hasItems && <CartCounter>{quantity}</CartCounter>}
          <img src={cart} alt="shopping cart" />
        </Cart>
        <NavSmall />
      </RightNav>
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
