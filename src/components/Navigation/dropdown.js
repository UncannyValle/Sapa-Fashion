import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

const List = styled.ul`
  display: ${({ show }) => (show ? 'flex' : 'none')};
  position: absolute;
  transition: all 2s ease-out;
  flex-flow: column nowrap;
  background-color: black;
  padding: 0;
`
const Links = styled(Link)`
  padding: 1rem;
  transition: all 0.2s ease-out;
  color: white;
  text-decoration: none;
  font-size: 1.5rem;
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

const Dropdown = props => {
  const [open, setOpen] = useState(false)

  return (
    <div>
      <Links
        className="top-name"
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
      >
        {props.title}
      </Links>
      <List show={open}>
        <Links
          onMouseEnter={() => setOpen(true)}
          onMouseLeave={() => setOpen(false)}
        >
          Tops
        </Links>
        <Links
          onMouseEnter={() => setOpen(true)}
          onMouseLeave={() => setOpen(false)}
        >
          Bottoms
        </Links>
        <Links
          onMouseEnter={() => setOpen(true)}
          onMouseLeave={() => setOpen(false)}
        >
          Dresses
        </Links>
      </List>
    </div>
  )
}

export default Dropdown
