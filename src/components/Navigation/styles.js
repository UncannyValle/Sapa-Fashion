import styled from 'styled-components'
import { Link } from 'gatsby'

import { breakpoints } from '../../utils/styles'

export const Wrapper = styled.div`
  background: white;
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


export const MenuLink = styled(Link)`
  color: black;
  text-decoration: none;
  font-size: 2rem;
  &.main-title {
    font-size: 3rem;
    font-weight: bold;
    font-family: 'Niconne';
    padding: 0;
  }
  h3 {
    font-size: 1.5rem;
    margin: 0.25rem 0;
    text-align: center;
  }
  .cart {
    height: 2rem;
    width: auto;
    vertical-align: bottom;
  }
  @media (max-width: ${breakpoints.s}px) {
    font-size: 1rem;
  }
`
export const Navbar = styled.nav`
  display: flex;
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
