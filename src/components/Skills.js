import React from 'react'
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab, faHtml5, faCss3Alt, faJs, faReact, faLess} from '@fortawesome/free-brands-svg-icons'
import {faCube} from '@fortawesome/free-solid-svg-icons'
import { dom } from '@fortawesome/fontawesome-svg-core'
import blender from './imgs/blender.png'
dom.watch()

 
library.add(faHtml5, faCss3Alt, faJs, faCube, faReact, faLess)

let Icon = styled.svg`
    font-size: 5rem;
    color: dodgerblue;
`;

let SkillsContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    height: 60vh;
    width: 70%;
    margin: 0 auto;
    
`;

let SkillDiv = styled.div`
    margin: 4%;
    width: 25%;
    @media (max-width: 870px){
        width: 30%;
    };
    @media (max-width: 650px){
        width: 50%
    }
`;

let Title = styled.h1`
    margin: 4% auto;
`;

let Container = styled.h1`
    margin: 4% auto;
`;


const Skills = () => {
    return (
        <Container>
            <Title>Skills</Title>
            <SkillsContainer>
                <SkillDiv>
                    <h2>HTML5</h2>
                    <Icon className="fab fa-html5" style={{color: "#df4b25"}}></Icon>
                </SkillDiv>
                <SkillDiv>
                    <h2>CSS3</h2>
                    <Icon className="fab fa-css3-alt" style={{color: "#1e5fa9"}}></Icon>
                </SkillDiv>
                <SkillDiv>
                    <h2>Less</h2>
                    <Icon className="fab fa-less" style={{color: "#1d365d"}}></Icon>
                </SkillDiv>
                <SkillDiv>
                    <h2>JavaScript</h2>
                    <Icon className="fab fa-js" style={{color: "#e9d54d"}}></Icon>
                </SkillDiv>
                <SkillDiv>
                    <h2>React</h2>
                    <Icon className="fab fa-react" style={{color: "#00d8ff"}}></Icon>
                </SkillDiv>
                <SkillDiv>
                    <h2>Blender</h2>
                    {/* <Icon className="fas fa-cube" style={{color: "#39ad60"}}></Icon> */}
                    <img src={blender} style={{width: "90px", marginTop: "-5px"}}></img>
                </SkillDiv>
            </SkillsContainer>
        </Container>
    )
}

export default Skills