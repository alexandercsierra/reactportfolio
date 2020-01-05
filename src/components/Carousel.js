import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';
import styled from 'styled-components';
import jar from "./imgs/blendermodels/jar.png"
import cathedralinside from "./imgs/blendermodels/cathedralinside.png"
import cathedraloutside from "./imgs/blendermodels/cathedraloutside.png"
import spray from "./imgs/blendermodels/spray.png"
import chess from "./imgs/blendermodels/chess.png"
import lolly from "./imgs/blendermodels/lolly.png"
import corn from "./imgs/blendermodels/corn.png"
import cafe from "./imgs/blendermodels/cafe.png"
import donut from "./imgs/blendermodels/donut.png"
import snes from "./imgs/blendermodels/snes.png"
import entry from "./imgs/blendermodels/entry.png"




const items = [
  {
    src: jar,
    // altText: 'Slide 1',
    // caption: 'Slide 1'
  },
  {
    src: cathedralinside,
    // altText: 'Slide 2',
    // caption: 'Slide 2'
  },
  {
    src: cathedraloutside,
    // altText: 'Slide 3',
    // caption: 'Slide 3'
  },
  {
    src: spray,
    // altText: 'Slide 4',
    // caption: 'Slide 4'
  },
  {
    src: lolly,
    // altText: 'Slide 4',
    // caption: 'Slide 4'
  },
  {
    src: corn,
    // altText: 'Slide 4',
    // caption: 'Slide 4'
  },
  {
    src: chess,
    // altText: 'Slide 4',
    // caption: 'Slide 4'
  },
  {
    src: cafe,
    // altText: 'Slide 4',
    // caption: 'Slide 4'
  },
  {
    src: donut,
    // altText: 'Slide 4',
    // caption: 'Slide 4'
  },
  {
    src: snes,
    // altText: 'Slide 4',
    // caption: 'Slide 4'
  },
  {
    src: entry,
    // altText: 'Slide 4',
    // caption: 'Slide 4'
  }
];

const CaroDiv = styled.div`
    margin: 4% auto;
    width: 60%;
    display: flex;
    justify-content: center;
    // background: black;
    @media (max-width: 750px){
      width: 85%;
    }
`;

const Link = styled.a`
  margin: 4%;
`;


const Carousel2= (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item) => {
    return (
      <CarouselItem
        
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} />
        <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
      </CarouselItem>
    );
  });

  return (
    <div>
      <h1 style={{marginTop: "8%"}}>3D Models</h1>
      <CaroDiv>
          <Carousel
          activeIndex={activeIndex}
          next={next}
          previous={previous}
          
          >
          <CarouselIndicators id="arrow" items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
          {slides}
          <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
          <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
          </Carousel>
      </CaroDiv>
      <Link href="https://www.artstation.com/alexandercsierra" target="_blank">Visit my Artstation Profile</Link>
    </div>
  );
}

export default Carousel2;