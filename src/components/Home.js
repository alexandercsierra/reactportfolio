import React from 'react'
import styled from 'styled-components'
import img from "./imgs/appledark.jpg"
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import profile from './imgs/profile.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab, faLinkedin, faGithubSquare} from '@fortawesome/free-brands-svg-icons'
import {faCube} from '@fortawesome/free-solid-svg-icons'
import { dom } from '@fortawesome/fontawesome-svg-core'
import { isWidthDown } from '@material-ui/core';
dom.watch()

library.add(faLinkedin, faGithubSquare)


const Banner = styled.div`
    background-image: url(${img});
    height: 80vh;
    background-position: 50% 50%;
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

const Name = styled.h1`
    font-size: 4rem;
    color: white;
    letter-spacing: 1.5;
    margin-top: 15%;
    margin-bottom: 1%;
    @media (max-width: 1100px){
        font-size: 3rem; 
        margin-top: 20%;
     }
     @media (max-width: 570px){
        font-size: 2.5rem; 
     }
     @media (max-width: 420px){
        font-size: 2rem; 
        margin-top: 10%;
     }
`;

const Title = styled.p`
    color: white;
    font-size: 1.5rem;
    margin: 0;
    @media (max-width: 570px){
        font-size: 1.25rem; 
     }
`;

const AboutDiv = styled.div`
    // border: 1px solid red;
    margin: 4% auto;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 90%;
    box-shadow: 0.3em 0.3em 1em rgba(0,0,0,0.3);
    @media (max-width: 1100px){
       width: 90%; 
       flex-direction: column;
    }


`;

const Profile = styled.img`
    width: 100%;
`;

const ProfileDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40%;
    @media (max-width: 1100px){
        width: 50%; 
     }
     
`;

const TextDiv = styled.div`
    margin: 0 auto;
    width: 40%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media (max-width: 1100px){
        width: 90%; 
     }
`;

let Icon = styled.svg`
    font-size: 4rem;
    color: #0077b5;
    margin: 0 2%;
`;

let IconDiv = styled.div`
    display: flex;
    justify-content: space-around;
    // border: 1px solid red;
    width: 60%;
    margin: 4% auto;
`;

let Container = styled.div`
    margin: 0 auto;
    // width: 25%
    // border: 1px solid red;
`;


// const useStyles = makeStyles(theme => ({
//     root: {
//       padding: theme.spacing(3, 2),
//       margin: "0 auto",
//       boxShadow: "3px 3px 8px 1px rgb(17, 17, 17)",
//       display: "flex",
//       justifyContent: "space-between",
//       ['@media (max-width:1150px)']: { // eslint-disable-line no-useless-computed-key
//         // margin: "0 50% 0 50%",
//         // position: "relative",
//         flexDirection: "column",
//         alignItems: "center",
//         width: "90%"
//         // width: "900px"
//       },
//       ['@media (max-width:420px)']: { // eslint-disable-line no-useless-computed-key
//         width: "98%"
//       }
//     },
//   }));



const Home = () => {
    // const classes = useStyles();
    return (
        <Container>
            <Banner>
                <Name>&#60; Alexander Sierra / &#62;</Name>
                <Title>Full Stack Web Developer</Title>
            </Banner>
            <AboutDiv>
                    <ProfileDiv>
                        <Profile src={profile}></Profile>
                    </ProfileDiv>
                    <TextDiv>
                        <h5 >
                            About Me
                        </h5>
                        <p style={{textAlign: "left"}}><br></br>I come from a pre-med background (holding a B.S. in Health Sciences), currently working hard to transition into web development. Above all else, I love learning new things, and there is certainly no shortage of that in the development world. My learning is currently taking place at Lambda School, where I am also employed as a Team Lead.<br></br><br></br> I find it so satisfying to have a problem, research the solution, then be able to immediately apply my new knowledge to fix a problem I couldn't solve 5 minutes ago. When not developing, I can be found playing trumpet in my community band, or frolicking in the snow. 
                        </p>
                        <IconDiv>
                            <a href="https://www.linkedin.com/in/alexander-sierra-b7519673/" target="_blank"><Icon className="fab fa-linkedin"></Icon></a>
                            <a href="https://github.com/alexandercsierra" target="_blank"><Icon className="fab fa-github-square" style={{color: "#24292e"}}></Icon></a>
                        </IconDiv>
                    </TextDiv>
                {/* <Paper className={classes.root} >
                    
                    <TextDiv>
                        <Typography variant="h5" component="h3" >
                            About Me
                        </Typography>
                        <Typography component="p" style={{textAlign: "left"}}><br></br>I come from a pre-med background (holding a B.S. in Health Sciences), currently working hard to transition into web development. Above all else, I love learning new things, and there is certainly no shortage of that in the development world. My learning is currently taking place at Lambda School, where I am also employed as a Team Lead.<br></br><br></br> I find it so satisfying to have a problem, research the solution, then be able to immediately apply my new knowledge to fix a problem I couldn't solve 5 minutes ago. When not developing, I can be found playing trumpet in my community band, or frolicking in the snow. 
                        </Typography>
                        <IconDiv>
                            <a href="https://www.linkedin.com/in/alexander-sierra-b7519673/" target="_blank"><Icon className="fab fa-linkedin"></Icon></a>
                            <a href="https://github.com/alexandercsierra" target="_blank"><Icon className="fab fa-github-square" style={{color: "#24292e"}}></Icon></a>
                        </IconDiv>
                    </TextDiv> */}
                {/* </Paper> */}
            </AboutDiv>
        </Container>
    )
}

export default Home



