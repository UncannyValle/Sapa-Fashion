import React from 'react'
import styled from 'styled-components'
import Dropdown from './dropdown'

const Navbar = styled.nav`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  @media (max-width: 768px) {
    display: none;
  }
`


const NavBig = () => {
    //Drop down menu logic
  const women = {
    title: 'Women',
    sections: ['Tops', 'Bottoms', 'Dresses', 'Women-Shoes'],
  }
  const men = {
    title: 'Men',
    sections: ['Shirts', 'Pants', 'Suits', 'Men-Shoes'],
  }

  const acc = {
    title: 'Accessories',
    sections: ['Bags', 'Sunglasses', 'Hats'],
  }
  return (
    <Navbar>
      <Dropdown title={women.title} sections={women.sections} />
      <Dropdown title={men.title} sections={men.sections} />
      <Dropdown title={acc.title} sections={acc.sections} />
    </Navbar>
  )
}

export default NavBig
