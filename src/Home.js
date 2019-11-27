import React, { Component } from 'react'
import './Home.css'
import {
  Container,
  
  Divider
} from 'semantic-ui-react'


export default class Home extends Component {
  render() {

    return (
      <div className='please'>

        <Container>
        <Divider horizontal>Hi</Divider>        
        
        <Container className="hometext" textAlign='center'>
        <h1 className="animated infinite pulse slowest">" A circle is the reflection of eternity. It has no beginning and it has no end - and if you put several circles over each other, then you get a spiral. "</h1>
        <p>This website was made as a way to remember all the great memories and members of the SEI - Eternity course. It also serves as a great reference to all the course materials that were took in the duration of it. Hope you enjoy it <span role="img" aria-label="heart">❤️</span></p>
        </Container>
        </Container>     
      </div>
    )
  }
}