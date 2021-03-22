import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled, { css } from 'styled-components'
import Button from './Button'
import Dropdown from './Dropdown'

const Nav = styled.nav`
  background: linear-gradient(#000, #808080);
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
`
const NavbarLogo = styled(Link)`
  color: #fff;
  justify-self: start;
  margin-left: 20px;
  cursor: pointer;
  text-decoration: none;
  font-size: 2rem;

  @media ${({ theme }) => theme.tablet} {
    position: absolute;
    top: 0;
    left: 0;
    transform: translate(25%, 50%);
  }
`

const MenuIcon = styled.div`
  display: none;

  @media ${({ theme }) => theme.tablet} {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`

const IconStyles = css`
  ${({ cname }) =>
    cname === 'fa-bars' &&
    css`
      color: #fff;
    `}

  ${({ cname }) =>
    cname === 'fa-times' &&
    css`
      color: #fff;
      font-size: 2rem;
    `}
  
    ${({ cname }) =>
    cname === 'fa-times' &&
    css`
      color: #fff;
      font-size: 2rem;
    `}
`
const Icon = styled.i`
  ${IconStyles}
`
const NavMenu = styled.ul`
  display: grid;
  grid-template-columns: repeat(5, auto);
  grid-gap: 10px;
  list-style: none;
  text-align: center;
  width: 70vw;
  justify-content: end;
  margin-right: 2rem;

  @media ${({ theme }) => theme.tablet} {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 90vh;
    position: absolute;
    top: 80px;
    left: -100%;
    opacity: 1;
    transition: all 0.5s ease;

    ${({ cname }) =>
      cname === 'active' &&
      css`
        background: #242222;
        left: 0;
        z-index: 1;
      `}
  }
`

const NavItem = styled.li`
  display: flex;
  align-items: center;
  height: 80px;
`

const NavLinks = styled(Link)`
  color: white;
  text-decoration: none;
  padding: 0.5rem 1rem;

  &:hover {
    background-color: ${({ theme }) => theme.primaryColor};
    border-radius: 4px;
    transition: all 0.2s ease-out;
  }

  @media ${({ theme }) => theme.tablet} {
    text-align: center;
    padding: 2rem;
    width: 100%;
    display: table;

    &:hover {
      border-radius: 0;
      background-color: ${({ theme }) => theme.primaryColor};
    }
  }
`

const NavLinksMobile = styled(Link)`
  display: none;

  @media ${({ theme }) => theme.tablet} {
    display: block;
    text-align: center;
    padding: 1.5rem;
    margin: 2rem auto;
    border-radius: 4px;
    width: 80%;
    background: #1888ff;
    text-decoration: none;
    color: #fff;
    font-size: 1.5rem;

    &:hover {
      background: #fff;
      color: ${({ theme }) => theme.primaryColor};
      transition: 250ms;
    }
  }
`

const Navbar = () => {
  const [click, setClick] = useState(false)
  const [dropdown, setDropdown] = useState(false)

  const handleClick = () => setClick(!click)
  const closeMobileMenu = () => {
    setClick(false)
    setDropdown(false)
  }
  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false)
    } else {
      setDropdown(true)
    }
  }
  const onMouseLeave = () => {
    setDropdown(false)
  }
  const extendElement = () => {
    dropdown ? setDropdown(false) : setDropdown(true)
  }

  return (
    <>
      <Nav>
        <NavbarLogo to='/'>로고</NavbarLogo>

        <MenuIcon onClick={handleClick}>
          <Icon
            className={click ? 'fas fa-times' : 'fas fa-bars'}
            cname={click ? 'fa-times' : 'fa-bars'}
          />
        </MenuIcon>

        <NavMenu cname={click ? 'active' : ''}>
          <NavItem>
            <NavLinks to='/' onClick={closeMobileMenu}>
              홈
            </NavLinks>
          </NavItem>
          <NavItem onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
            <NavLinks to='/services' onClick={extendElement}>
              서비스{' '}
              <Icon className='fas fa-caret-down' cname='fa-caret-down' />
            </NavLinks>
            {dropdown && <Dropdown onCloseMobileMenu={closeMobileMenu} />}
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

        <Button btnName='회원가입' />
      </Nav>
    </>
  )
}

export default Navbar
