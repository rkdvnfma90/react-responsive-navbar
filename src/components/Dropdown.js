import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { menuitems } from '../data/menuitems'

const DropdownMenu = styled.ul`
  width: 200px;
  position: absolute;
  top: 80px;
  list-style: none;
  text-align: start;
  display: ${({ clicked }) => (clicked ? 'none' : 'block')};
`

const DropdownItem = styled.li`
  background: ${({ theme }) => theme.primaryColor};
  cursor: pointer;

  &:hover {
    background: #5cabff;
  }
`
const DropdownLink = styled(Link)`
  display: block;
  width: 100%;
  height: 100%;
  text-decoration: none;
  color: #fff;
  padding: 16px;
`

const Dropdown = () => {
  const [click, setClick] = useState(false)
  const handleClick = () => setClick(!click)

  return (
    <>
      {/* click ? 'dropdown-menu clicked' : 'dropdown-menu' */}
      <DropdownMenu onClick={handleClick} clicked={click}>
        {menuitems.map((item, index) => (
          <DropdownItem key={index}>
            <DropdownLink
              cname={item.cname}
              to={item.path}
              onClick={() => setClick(false)}
            >
              {item.title}
            </DropdownLink>
          </DropdownItem>
        ))}
      </DropdownMenu>
    </>
  )
}

export default Dropdown
