import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab, faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import {faCube, faEnvelope} from '@fortawesome/free-solid-svg-icons'
import { dom } from '@fortawesome/fontawesome-svg-core'
dom.watch()

 
library.add(faGithubSquare, faLinkedin, faEnvelope)

let Icon = styled.svg`
    font-size: 7rem;
    margin: 0 2%;
`;

let ContactsDiv = styled.div`
  margin: 4% auto;
  display: flex;
  justify-content: center;
`;

let Contacts = styled.div`
  margin: 0 2%;
`;

let Title = styled.div`
  margin: 5% auto;
  font-size: 3rem;

`;

let Container = styled.div`
  height: 50vh;
`;



export default function Contact(props) {


  return (
    <Container>
      <Title>Want to get in contact with me?</Title>
      <ContactsDiv>
        <Contacts>
          <h3>Email</h3>
          <a href="mailto:alexandercsierra@gmail.com" target="_blank"><Icon className="fas fa-envelope" style={{color: "#c23b2c"}}></Icon></a>
          {/* <h3 style={{fontSize: "1rem"}}>alexandercsierra@gmail.com</h3> */}
        </Contacts>
        <Contacts>
          <h3>LinkedIn</h3>
          <a href="https://www.linkedin.com/in/alexander-sierra-b7519673/" target="_blank"><Icon className="fab fa-linkedin" style={{color: "#0077b5"}}></Icon></a>
        </Contacts>
        <Contacts>
          <h3>GitHub</h3>
          <a href="https://github.com/alexandercsierra" target="_blank"><Icon className="fab fa-github-square" style={{color: "#24292e"}}></Icon></a>
        </Contacts>
        
        
        
      </ContactsDiv>
    </Container>
    
  );
}