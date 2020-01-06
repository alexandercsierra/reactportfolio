import React from 'react'
import Card from './Card'
import styled from 'styled-components'
import planets from "./imgs/planets.png";
import rps from "./imgs/rps.png";
import bookr from "./imgs/bookr.png";
import cities from "./imgs/cities.png";
import Carousel from "./Carousel"
import heroku from "./imgs/heroku.png";
import zingers from "./imgs/zingers.png"
import holiday from "./imgs/holiday.png"
import char from "./imgs/char.png"


let CardDiv = styled.div`
    display: flex;
    justify-content:center;
    flex-wrap: wrap;
    margin: 4%;
`;

let Title = styled.h1`
    margin: 4%;
`;

const Projects = () => {

// let arr = [planets, rps, bookr, cities];
let obj = {
    planets: {
        letter: "P",
        title: "Planetary Weights",
        image: planets,
        desc: "Takes a user's weight on Earth, and planet selection and returns their weight on another planet.",
        repo: "https://github.com/alexandercsierra/planetary-weights",
        url: "https://alexandercsierra.github.io/planets/index.html"
    },
    holiday: {
        letter: "H",
        title: "Holiday Postcards",
        image: holiday,
        desc: "A project that allows for viewing holiday-themed postcards with a video message. Created using React",
        repo: "https://github.com/alexandercsierra/holidayPostcards",
        url: "https://alexandercsierra.github.io/holidayPostcards/#/"
    },
    cities: {
        letter: "C",
        title: "Cities by Consonants",
        image: cities,
        desc: "Users try to guess which states contain a city which shares the same consonants as it's state name.",
        repo: "https://github.com/alexandercsierra/citiesByConsonant",
        url: "https://alexandercsierra.github.io/cities/index.html"
    },
    characteristiq: {
        letter: "C",
        title: "Characteristiq",
        image: char,
        desc: "Helped to create a more stream-lined Myers-Briggs-esque personality test as part of a hackathon team",
        repo: "https://github.com/Myers-Briggs-for-Millennials/Frontend",
        url: "https://characteristiq.now.sh/",
        video: "https://www.youtube.com/watch?v=2gU_upDqM34&feature=youtu.be"
    },
    ggapi: {
        letter: "G",
        title: "Golden Girls API",
        image: heroku,
        desc: "A simple API that will provide randomized quotes from The Golden Girls",
        repo: "https://github.com/alexandercsierra/goldenGirlsAPI",
        url: "https://golden-girls-api.herokuapp.com/"
    },
    zingers: {
        letter: "Z",
        title: "Zbornak Zingers",
        image: zingers,
        desc: "A web app built in React, which will pull quotes from the Golden Girls API and display them in cards",
        repo: "https://github.com/alexandercsierra/zbornakzingersreact",
        url: "https://zbornakzingers.netlify.com/"
    },
    bookr: {
        letter: "O",
        title: "OER Bookr",
        image: bookr,
        desc: "Marketing and About Us page for OER Bookr, a source for open source textbooks",
        repo: "https://github.com/Build-Week-Team-OERBookr/UI",
        url: "https://oerbookr2019.netlify.com/"
    },
    rps: {
        letter: "R",
        title: "Rock Paper Scissors",
        image: rps,
        desc: "Choose from rock, paper, or scissors and play to win against the computer.",
        repo: "https://github.com/alexandercsierra/rpsgame",
        url: "https://alexandercsierra.github.io/rockpaperscissors/rpsgame.html"
    }
    

}

let arr = Object.values(obj);



let cards = arr.map(proj => {
    return(<Card style = {{margin: "4%"}} letter = {proj.letter} title = {proj.title} img={proj.image} desc = {proj.desc} key={proj.title} url={proj.url} repo = {proj.repo} video={proj.video}/>)
})

    return (
        <div>
            <Title>Projects</Title>
            <CardDiv>
                {cards}
            </CardDiv>
            <Carousel />
        </div>
        
    )
};

export default Projects