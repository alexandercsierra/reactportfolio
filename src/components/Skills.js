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

let Image = styled.img`
    // width: 90px;
    // width: 38%;
    width: 5rem;
    margin-top: -.05%;
    margin-bottom: 5%;
`;

let SkillsContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    height: 60vh;
    width: 70%;
    margin: 0 auto;
    @media (max-width: 560px){
        width: 90%;
    }
    
`;

let SkillDiv = styled.div`
    margin: 4%;
    width: 25%;
    @media (max-width: 870px){
        width: 30%;
    };
    @media (max-width: 650px){
        width: 30%
    };
    // @media (max-width: 650px){
    //     width: 50%
    // };
`;

let Title = styled.h1`
    margin: 4% auto;
`;

let SkillTitle=styled.h2`
    @media (max-width: 720px){
        font-size: 1rem;
    }
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
                    <SkillTitle>HTML5</SkillTitle>
                    <Icon className="fab fa-html5" style={{color: "#df4b25"}}></Icon>
                </SkillDiv>
                <SkillDiv>
                    <SkillTitle>CSS3</SkillTitle>
                    <Icon className="fab fa-css3-alt" style={{color: "#1e5fa9"}}></Icon>
                </SkillDiv>
                <SkillDiv>
                    <SkillTitle>Less</SkillTitle>
                    <Icon className="fab fa-less" style={{color: "#1d365d"}}></Icon>
                </SkillDiv>
                <SkillDiv>
                    <SkillTitle>JavaScript</SkillTitle>
                    <Icon className="fab fa-js" style={{color: "#e9d54d"}}></Icon>
                </SkillDiv>
                <SkillDiv>
                    <SkillTitle>React</SkillTitle>
                    <Icon className="fab fa-react" style={{color: "#00d8ff"}}></Icon>
                </SkillDiv>
                <SkillDiv>
                    <SkillTitle>Blender</SkillTitle>
                    {/* <Icon className="fas fa-cube" style={{color: "#39ad60"}}></Icon> */}
                    {/* <img src={blender} style={{width: "90px", marginTop: "-5px", marginBottom: "5%"}}></img> */}
                    <Image src={blender}></Image>
                </SkillDiv>
            </SkillsContainer>
        </Container>
    )
}

export default Skills