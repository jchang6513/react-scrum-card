import React, { useState } from "react";
import ReactDOM from "react-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import pokerCover from "./png/Cover - option 2.png";
import pokerI from "./png/planning poker_Low hanging fruit.png";
import pokerII from "./png/planning poker_Piece of cake.png";
import pokerIII from "./png/planning poker_It ain't rocket science.png";
import pokerV from "./png/planning poker-03.png";
import pokerVIII from "./png/planning poker_An arm and a leg.png";
import pokerXIII from "./png/planning poker_Squeaking by.png";
import pokerXX from "./png/planning poker_Don't put all .png";
import pokerXL from "./png/planning poker_Meterse en un berenjenal.png";
import pokerC from "./png/planning poker_Monster task.png";
import pokerInf from "./png/planning poker_When pigs fly.png";
import pokerBreak from "./png/planning poker_Eat a brownie.png";
import pokerNaN from "./png/planning poker_Here be dragons.png";

import "./styles.scss";

function App() {
  const pokers = [
    pokerI,
    pokerII,
    pokerIII,
    pokerV,
    pokerVIII,
    pokerXIII,
    pokerXX,
    pokerXL,
    pokerC,
    pokerInf,
    pokerNaN,
    pokerBreak
  ];
  const [flipped, setFlipped] = useState(null);
  const [picked, setPicked] = useState(null);

  const onFlipped = e => {
    e.stopPropagation();
    setFlipped(!flipped);
  };
  return (
    <div className="App">
      <div className="card-deck">
        {pokers.map((poker, index) => (
          <div className="image-frame" onClick={() => setPicked(poker)}>
            <img src={poker} alt="" />
          </div>
        ))}
      </div>
      <TransitionGroup component={null}>
        {picked && (
          <CSSTransition classNames="poker" timeout={300}>
            <div
              id="pop-up"
              onClick={() => {
                setPicked(null);
                setFlipped(false);
              }}
            >
              <div className={`picked-card ${flipped ? 'flipped' : ''}`}>
                <div className="card-front">
                  <img alt="selected card" src={picked} onClick={(e) => onFlipped(e)}/>
                </div>
                <div className="card-back">
                  <img alt="card back" src={pokerCover} onClick={(e) => onFlipped(e)}/>
                </div>
              </div>
            </div>
          </CSSTransition>
        )}
      </TransitionGroup>
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
