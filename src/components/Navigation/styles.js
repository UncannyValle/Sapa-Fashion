import styled from 'styled-components'
import { Link } from 'gatsby'

import { breakpoints } from '../../utils/styles'

export const Wrapper = styled.div`
  background: white;
  margin-bottom: 1.45rem;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 100;
  box-shadow: ${({ animate }) =>
    animate
      ? '1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)'
      : 'none'};
  transition: all 200ms ease-in;
`

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 3rem;
  margin: 0 auto;
  width: 80%;
`

export const MenuLink = styled(Link)`
  color: black;
  text-decoration: none;
  font-size: 1.5rem;
  &.main-title {
    font-size: 4rem;
    font-weight: bold;
    font-family: 'Niconne';
    padding: 0;
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
