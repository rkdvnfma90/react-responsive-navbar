import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Button from './Button'
import Dropdown from './Dropdown'

const Nav = styled.nav``
const NavbarLogo = styled(Link)``
const MenuIcon = styled.div``
const Icon = styled.i``
const NavMenu = styled.ul``
const NavItem = styled.li``
const NavLinks = styled(Link)``
const NavLinksMobile = styled(Link)``

const Navbar = () => {
  const [click, setClick] = useState(false)
  const [dropdown, setDropdown] = useState(true)

  const handleClick = () => setClick(!click)
  const closeMobileMenu = () => setClick(false)

  return (
    <>
      <Nav>
        <NavbarLogo to='/'>로고</NavbarLogo>

        <MenuIcon onClick={handleClick}>
          <Icon className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </MenuIcon>

        {/* click ? 'nav-menu active' : 'nav-menu' */}
        <NavMenu>
          <NavItem>
            <NavLinks to='/' onClick={closeMobileMenu}>
              홈
            </NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to='/services' onClick={closeMobileMenu}>
              서비스 <Icon className='fas fa-caret-down' />
            </NavLinks>
            {dropdown && <Dropdown />}
          </NavItem>
          <NavItem>
            <NavLinks to='/contact-us' onClick={closeMobileMenu}>
              연락처
            </NavLinks>
          </NavItem>
          <NavItem>
            <NavLinksMobile to='/sign-up' onClick={closeMobileMenu}>
              회원가입
            </NavLinksMobile>
          </NavItem>
        </NavMenu>
        <Button />
      </Nav>
    </>
  )
}

export default Navbar
