import React from 'react'
import styled from 'styled-components'

const FooterWrapper = styled.footer`
  background-color: white;
  
`
export const Footer = () => (
  <FooterWrapper>
    © {new Date().getFullYear()}, Built by
    {` `}
    <a href="https://www.theuncannyvalle.com">Julian Valle</a>
  </FooterWrapper>
)
