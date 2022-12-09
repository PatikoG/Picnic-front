import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export default function Header() {
  return (
  <div>
    <HomeD>
      <HomeLink to='/'>Home</HomeLink>
    </HomeD>
    <HeaderInfo>
        <StyledLink to='/mobile'>Mobile</StyledLink>
        <StyledLink to='/web'>Web</StyledLink>
        <StyledLink to='/gender'>Gender</StyledLink>
        <StyledLink to='/university'>University</StyledLink>
        <StyledLink to='/custom'>Custom</StyledLink>
    </HeaderInfo>
  </div>
  )
}

const HomeD = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
`

const HomeLink = styled(Link)`
color: black;
  text-align: center;
  width: 150px;
  background-color: #11fb11;
  text-decoration: none;
  border-radius: 11px;
  font-size: 20px;
  line-height: 29px;
  font-weight: 700;
  margin-bottom: 80px;
  
`


const HeaderInfo = styled.div`
    
    margin-bottom: 48px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const StyledLink = styled(Link)`
    width: 150px;
    
    background-color: black;

    text-decoration: none;
    text-align: center;
    border-radius: 11px;
    color: red;
    
    font-size: 20px;
    line-height: 29px;
    font-weight: 700;

  `
