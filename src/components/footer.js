import React from 'react'
import styled from 'styled-components'

const FooterWrapper = styled.footer`
  background-color: white;
  position:absolute;
  bottom: 0;
  width: 100%;
`
export const Footer = () => (
  <FooterWrapper>
    © {new Date().getFullYear()}, Built by
    {` `}
    <a href="https://www.theuncannyvalle.com">Julian Valle</a>
  </FooterWrapper>
)
