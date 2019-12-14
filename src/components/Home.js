import React from 'react'
import styled from 'styled-components'
import img from "./imgs/appledark.jpg"

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



const Home = () => {
    return (
        <div>
            <Banner>
                <Name>&#60; Alexander Sierra / &#62;</Name>
                <Title>Full Stack Web Developer</Title>
            </Banner>
            <div>
                <h1>About Me</h1>
                <p>Some stuff about me</p>
            </div>
        </div>
    )
}

export default Home