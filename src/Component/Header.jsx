import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export default function Header() {
  return (
    <HeaderInfo>
        <StyledLink to='/mobile'>Mobile</StyledLink>
        <StyledLink to='/web'>Web</StyledLink>
        <StyledLink to='/gender'>Gender</StyledLink>
        <StyledLink to='/university'>University</StyledLink>
        <StyledLink to='/custom'>Custom</StyledLink>
    </HeaderInfo>
  )
}

const HeaderInfo = styled.div`
    margin-top: 48px;
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
