import React from "react";
import ReactDOM from "react-dom";
import Slider from "react-slick";

import PokerCover from "./pokers/PokerCover";
import PokerOne from "./pokers/PokerOne";
import PokerTwo from "./pokers/PokerTwo";
import PokerThree from "./pokers/PokerThree";
import PokerFive from "./pokers/PokerFive";
import PokerEight from "./pokers/PokerEight";
import PokerThirteen from "./pokers/PokerThirteen";
import PokerTwenty from "./pokers/PokerTwenty";
import PokerForty from "./pokers/PokerForty";
import PokerHundred from "./pokers/PokerHundred";
import PokerInfinty from "./pokers/PokerInfinty";
import PokerShaving from "./pokers/PokerShaving";
import PokerCoffee from "./pokers/PokerCoffee";
import PokerEat from "./pokers/PokerEat";
import PokerDragons from "./pokers/PokerDragons";

import "./styles.css";

function App() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div className="App">
      <h1> scrum-poker-cards </h1>
      <Slider {...settings}>
        <div>
          <h3>1</h3>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
      </Slider>
      <div className="card-deck">
        <PokerCover />
        <PokerOne />
        <PokerTwo />
        <PokerThree />
        <PokerFive />
        <PokerEight />
        <PokerThirteen />
        <PokerTwenty />
        <PokerForty />
        <PokerHundred />
        <PokerInfinty />
        <PokerShaving />
        <PokerCoffee />
        <PokerEat />
        <PokerDragons />
      </div>
      <a
        className="credit"
        href="https://github.com/redbooth/scrum-poker-cards"
      >
        redbooth/scrum-poker-cards
      </a>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
