import React from 'react'
import styled from 'styled-components'
import Header from './Header';
import Logo from '../../src/Logo.png'



export default function Home(props) {
  


  return (
    <div>
      <LogoImg>
        <img src={Logo} alt="" />
        <Picnic>Picnic</Picnic>
      </LogoImg>
      <Header/>
      <Wrapper> 
        
        <MainQuestion>Question: You open ur phone and have a notif badge on instagram, facebook, snapchat, and linkedin...which do you click first?</MainQuestion>
        <Intro>Hi my name is Paata and here is my webapplication for this question.</Intro>
        <Paragh>Up there is 5 different links where i divided "CSV" collections by "Segment Type" and appearing with different graphs. 
          Mobile, Web and Gender had few information and i collected it easily but in 'Custom' and 'University' i tried to give you information
          with options and then will appear "Pie Graph"
        </Paragh>
      </Wrapper>
    </div>
  )
}

const Paragh = styled.p`
  text-align: center;
  margin-top: 48px;
`


const MainQuestion = styled.h1`
  text-align: center;
`
const LogoImg = styled.div`
  display: flex;
  flex-direction:column;
  align-items: center;
`

const Wrapper = styled.div`
 
  max-width: 2800px;
  width: 100%;
  height:100%;
`

const Picnic = styled.h1`
  font-weight: 700;
  font-size: 35px;
`

const Intro = styled.h1`
  margin-top: 80px;
  font-weight: 700;
  font-size: 35px;
  text-align: center;
  color: green;
`
