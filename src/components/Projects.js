import React from 'react'
import Card from './Card'
import styled from 'styled-components'
import planets from "./imgs/planets.png";
import rps from "./imgs/rps.png";
import bookr from "./imgs/bookr.png";
import cities from "./imgs/cities.png";


let CardDiv = styled.div`
    display: flex;
    justify-content:center;
    flex-wrap: wrap;
    margin: 4%;
    // height: 80vh;
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
    rps: {
        letter: "R",
        title: "Rock Paper Scissors",
        image: rps,
        desc: "Choose from rock, paper, or scissors and play to win against the computer.",
        repo: "https://github.com/alexandercsierra/rpsgame",
        url: "https://alexandercsierra.github.io/rockpaperscissors/rpsgame.html"
    },
    bookr: {
        letter: "O",
        title: "OER Bookr",
        image: bookr,
        desc: "Marketing and About Us page for OER Bookr, a source for open source textbooks",
        repo: "https://github.com/Build-Week-Team-OERBookr/UI",
        url: "https://oerbookr2019.netlify.com/"
    },
    cities: {
        letter: "C",
        title: "Cities by Consonants",
        image: cities,
        desc: "Users try to guess which states contain a city which shares the same consonants as it's state name.",
        repo: "https://github.com/alexandercsierra/citiesByConsonant",
        url: "https://alexandercsierra.github.io/cities/index.html"
    }
}

let arr = Object.values(obj);



let cards = arr.map(proj => {
    return(<Card style = {{margin: "4%"}} letter = {proj.letter} title = {proj.title} img={proj.image} desc = {proj.desc} key={proj.title} url={proj.url}/>)
})

    return (
        <CardDiv>
            {cards}
        </CardDiv>
    )
};

export default Projects