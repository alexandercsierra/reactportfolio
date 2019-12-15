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

`;

const Name = styled.h1`
    font-size: 4rem;
    color: white;
    letter-spacing: 1.5;
    margin-top: 15%;
    margin-bottom: 1%;
`;

const Title = styled.p`
    color: white;
    font-size: 1.5rem;
    margin: 0;
`;

const AboutDiv = styled.div`
    margin: 4% auto;
    width: 60%;
`;

const Profile = styled.img`
    width: 40%;
`;

const TextDiv = styled.div`
    margin: 0 auto;
    width: 40%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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


const useStyles = makeStyles(theme => ({
    root: {
      padding: theme.spacing(3, 2),
      boxShadow: "3px 3px 8px 1px rgb(17, 17, 17)",
      display: "flex"
    },
  }));
  



const Home = () => {
    const classes = useStyles();
    return (
        <div>
            <Banner>
                <Name>&#60; Alexander Sierra / &#62;</Name>
                <Title>Full Stack Web Developer</Title>
            </Banner>
            <AboutDiv>
                <Paper className={classes.root} >
                    <Profile src={profile}></Profile>
                    <TextDiv>
                        <Typography variant="h5" component="h3" >
                            About Me
                        </Typography>
                        <Typography component="p" style={{textAlign: "left"}}><br></br>Although I come from a health sciences background, I'm working hard to transition into web development. Above all else, I love learning new things, and there is certainly no shortage of that in the development world. My learning is currently taking place at Lambda School.<br></br><br></br> I find it so satisfying to have a problem, research the solution, then be able to immediately apply my new knowledge to fix a problem I couldn't solve 5 minutes ago. When not developing, I can be found playing trumpet in my community band, or frolicking in the snow. 
                        </Typography>
                        <IconDiv>
                            <a href="https://www.linkedin.com/in/alexander-sierra-b7519673/"><Icon className="fab fa-linkedin"></Icon></a>
                            <a href="https://github.com/alexandercsierra"><Icon className="fab fa-github-square" style={{color: "#24292e"}}></Icon></a>
                        </IconDiv>
                    </TextDiv>
                </Paper>
            </AboutDiv>
        </div>
    )
}

export default Home



