import styled from 'styled-components'
import { Link } from 'gatsby'

import { breakpoints } from '../../utils/styles'

export const Wrapper = styled.div`
  background: #b0d4ff;
  margin-bottom: 1.45rem;
`

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  padding: 1.2rem 3rem;
  margin: 0 auto;
`

export const MenuLink = styled(Link)`
  color: black;
  text-decoration: none;
  font-size: 1.5rem;
  &.main-title {
    font-size: 2rem;
    font-weight: bold;
  }
  .cart {
    height: 2rem;
    width: auto;
    vertical-align: bottom;
  }
  @media (max-width: ${breakpoints.s}px) {
    font-size: 1.4rem;
  }
`
export const Navbar = styled.nav`
  display: flex;
  width: 50%;
  justify-content: space-between;
`
export const CartCounter = styled.span`
  background-color: white;
  color: #663399;
  border-radius: 20px;
  padding: 0 10px;
  font-size: 1.2rem;
  float: right;
  margin: -10px;
  z-index: 20;
`
