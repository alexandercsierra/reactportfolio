import React from 'react';
import styled from 'styled-components';
import img from './imgs/contact.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab, faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import {faCube, faEnvelope} from '@fortawesome/free-solid-svg-icons'
import { dom } from '@fortawesome/fontawesome-svg-core'
dom.watch()

 
library.add(faGithubSquare, faLinkedin, faEnvelope)

let Icon = styled.svg`
    font-size: 3rem;
    margin: 0 2%;
`;

let ContactsDiv = styled.div`
  margin: 4% auto;
  display: flex;
  justify-content: center;
`;

let Contacts = styled.div`
  margin: 0 2%;
  display: flex;
  flex-direction: column;
  justify-content:center;
`;

let Title = styled.div`
  // margin: 5% auto;
  margin: 3% 0 2% 0;
  font-size: 2.5rem;

`;

let Container = styled.div`
  height: 80vh;
`;

let Header = styled.h3`
  font-size: 1.2rem;
`;

const Banner = styled.div`
    background-image: url(${img});
    height: 45vh;
    background-position: 50% 90%;
    background-size: cover;
    display: flex;
    align-items: center;
    flex-direction: column;
    @media (max-width: 570px){
        height: 50vh;
     }
     @media (max-width: 420px){
        height: 30vh; 
     }

`;



export default function Contact(props) {


  return (
    <Container>
      <Banner/>
      <Title>Want to get in contact with me?</Title>
      <p>I'd love to hear from you.</p>
      <ContactsDiv>
        <Contacts>
          <Header>Email</Header>
          <a href="mailto:alexandercsierra@gmail.com" target="_blank"><Icon className="fas fa-envelope" style={{color: "#c23b2c"}}></Icon></a>
          {/* <h3 style={{fontSize: "1rem"}}>alexandercsierra@gmail.com</h3> */}
        </Contacts>
        <Contacts>
          <Header>LinkedIn</Header>
          <a href="https://www.linkedin.com/in/alexander-sierra-b7519673/" target="_blank"><Icon className="fab fa-linkedin" style={{color: "#0077b5"}}></Icon></a>
        </Contacts>
        <Contacts>
          <Header>GitHub</Header>
          <a href="https://github.com/alexandercsierra" target="_blank"><Icon className="fab fa-github-square" style={{color: "#24292e"}}></Icon></a>
        </Contacts>
        
        
        
      </ContactsDiv>
    </Container>
    
  );
}