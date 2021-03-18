import { Link } from 'react-router-dom'
import styled from 'styled-components'

const StyledButton = styled.button`
  padding: 8px 20px;
  border-radius: 4px;
  outline: none;
  border: none;
  font-size: 18px;
  color: #fff;
  cursor: pointer;
  background-color: ${({ theme }) => theme.primaryColor};

  &:hover {
    padding: 6px 18px;
    transition: all 0.5s ease-out;
    background-color: transparent;
    color: #fff;
    border-radius: 4px;
    border: 2px solid ${({ theme }) => theme.primaryColor};
  }
`

const Button = () => {
  return (
    <Link to='sign-up'>
      <StyledButton>회원가입</StyledButton>
    </Link>
  )
}

export default Button
