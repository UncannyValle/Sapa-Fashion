import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

////////Styles///////////
const Navbar = styled.nav`
  justify-content: space-evenly;
  align-items: center;
  display: none;
  @media (max-width: 768px) {
    display: flex;
    transition: all 0.2s ease-in-out;
  }
`
const Wrapper = styled.div`
  margin: 0;
  display: ${({ show }) => (show ? 'flex' : 'none')};
  position: absolute;
  top: 5rem;
  left: 0;
  width: 100vw;
  justify-content: space-between;
`
const List = styled.ul`
  display: flex;
  flex-flow: column nowrap;
  background-color: black;
  padding: 0;
  width: 10rem;
  text-align: center;
  margin: 0;
  height: 0;
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
    background: white;
  }
`
const Burger = styled.div`
  display: block;
  position: relative;
  right: 10px;

  z-index: 1;

  -webkit-user-select: none;
  user-select: none;
  input {
    display: block;
    width: 40px;
    height: 32px;
    position: absolute;
    top: -7px;
    left: -5px;

    cursor: pointer;

    opacity: 0; /* hide this */
    z-index: 2; /* and place it over the hamburger */
  }
  span {
    display: block;
    width: 33px;
    height: 4px;
    margin-bottom: 5px;
    position: relative;

    background: blue;
    border-radius: 3px;

    z-index: 1;

    transform-origin: 4px 0px;

    transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),
      background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.55s ease;
  }
`
const NavSmall = () => {
  //State
  const [open, setOpen] = useState(false)

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

  const changer = () => {
    !open ? setOpen(true) : setOpen(false)
    console.log(open)
  }
  return (
    <Navbar>
      <Burger>
        <input type="checkbox" onClick={changer} />
        <span></span>
        <span></span>
        <span></span>
      </Burger>
      <Wrapper show={open}>
        <List>
          <Links
            to={`/allproducts/women`.toLowerCase()}
            state={{ tagFromLink: women.title }}
            className="top-name"
            onClick={changer}
          >
            Women
          </Links>
          {women.sections.map(section => (
            <Links
              className="subsection"
              to={`/allproducts/${section}`.toLowerCase()}
              onClick={changer}
            >
              {section}
            </Links>
          ))}
          ;
        </List>

        <List>
          <Links
            to={`/allproducts/Men`.toLowerCase()}
            state={{ tagFromLink: men.title }}
            className="top-name"
            onClick={changer}
          >
            Men
          </Links>
          {men.sections.map(section => (
            <Links
              className="subsection"
              to={`/allproducts/${section}`.toLowerCase()}
              onClick={changer}
            >
              {section}
            </Links>
          ))}
          ;
        </List>

        <List>
          <Links
            to={`/allproducts/women`.toLowerCase()}
            state={{ tagFromLink: acc.title }}
            className="top-name"
            onClick={changer}
          >
            Accessories
          </Links>
          {acc.sections.map(section => (
            <Links
              className="subsection"
              to={`/allproducts/${section}`.toLowerCase()}
              onClick={changer}
            >
              {section}
            </Links>
          ))}
          ;
        </List>
      </Wrapper>
    </Navbar>
  )
}

export default NavSmall
