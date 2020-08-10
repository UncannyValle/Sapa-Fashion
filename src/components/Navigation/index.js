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
  const women = {
    title: "Women",
    sections: ['Tops', 'Bottoms', 'Dresses', 'Women-Shoes'],
   
  }
  const men = {
    title: "Men",
    sections: ['Shirts', 'Pants', 'Suits', 'Men-Shoes'],
  }
  const children = {
    title: "Children",
    sections: ['Shirts', 'Pants', 'Children-Shoes'],
  }
  const acc = {
    title: 'Accessories',
    sections: ['Bags', 'Sunglasses', 'Hats', 'Purses', 'Jewelry'],
  }
  return (
    <Wrapper ref={ourRef} animate={shadow}>
      <Container>
        <MenuLink className="main-title" to="/">
          {siteTitle}
          <h3>Styles for every occasion</h3>
        </MenuLink>
        <Navbar>
          <Dropdown
            title={women.title}
            sections={women.sections}
            link={women.link}
            // tag="Women"
          />
          <Dropdown title={men.title} sections={men.sections} />
          <Dropdown title={children.title} sections={children.sections} />
          <Dropdown title={acc.title} sections={acc.sections} />

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
