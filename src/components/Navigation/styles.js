import styled from 'styled-components'
import { Link } from 'gatsby'

import { breakpoints } from '../../utils/styles'



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
