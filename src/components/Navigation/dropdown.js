import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

const Wrapper = styled.header`
  margin: 0;
`
const List = styled.ul`
  display: ${({ show }) => (show ? 'flex' : 'none')};
  /* display:flex; */
  position: absolute;
  transition: all 2s ease-out;
  flex-flow: column nowrap;
  background-color: black;
  padding: 0;
  width: 10rem;
  text-align:center;
  margin: 0;
  height:0;
  top: 6rem;
  .subsection {
    background-color: black;
    
  }
`
const Links = styled(Link)`
  padding: 1rem;
  transition: all 0.2s ease-out;
  color: white;
  text-decoration: none;
  font-size: 2rem;
  border: 1px solid white;
  width: 100%;
  margin: 0 auto;
 
  &.top-name {
    border: none;
    color: black;
    :hover {
      background-color: #f0b1ed;
      color: black;
    }
  }
  :hover {
    color: #f0b1ed;
    border-color: #f0b1ed;
  }
`

const Dropdown = ({ title, sections }) => {
  const [open, setOpen] = useState(false)
  

  

  return (
    <Wrapper>
      <Links
        to={`/allproducts/${title}`.toLowerCase()}
        state={{ tagFromLink: title }}
        className="top-name"
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
      >
        {title}
      </Links>
      
      <List show={open}>
        {sections.map(section => (
          <Links
            className="subsection"
            to={`/allproducts/${section}`.toLowerCase()}
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
          >
            {section}
          </Links>
        ))}
        ;
      </List>
      
    </Wrapper>
  )
}

export default Dropdown
