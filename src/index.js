import React from "react";
import ReactDOM from "react-dom";

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
  return (
    <div className="App">
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
