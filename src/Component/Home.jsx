import React from 'react'
import styled from 'styled-components'
import Header from './Header';




export default function Home(props) {
  


  return (
    <div>
      <Header/>
      <Wrapper> 
        <h1>You open ur phone and have a notif badge on instagram, facebook, snapchat, and linkedin...which do you click first?</h1>
      </Wrapper>
    </div>
  )
}



const Wrapper = styled.div`
  padding-left: 144px;
  padding-right: 144px;
  max-width: 2800px;
  width: 100%;
  height:100%;
`

