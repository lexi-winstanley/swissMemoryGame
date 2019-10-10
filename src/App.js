import React from "react";
import FlexContainer from "./components/FlexContainer";
import GameOptions from "./components/GameOptions";
import Header from "./components/Header";
import PhotoCard from "./components/PhotoCard";
import Wrapper from "./components/Wrapper";
import cards from "./cards.json";
import "./App.css";

class App extends React.Component {
  state = {
    game: "start",
    activeCards: cards,
    clicked: [],
    score: 0,
    topScore: 0,
    wins: 0, 
    level: "easy"
  };

  startGame = level => {
    let randomCardIndices = [];
    let cardsArray = [];
    switch (level) {
      case "easy":
        while (randomCardIndices.length < 8) {
          let random = Math.trunc(Math.random() * 24);
          if (randomCardIndices.includes(random) !== true) {
            randomCardIndices.push(random);
          }
        }
        for (let i = 0; i < randomCardIndices.length; i++) {
          let currentIndexValue = randomCardIndices[i];
          cardsArray.push(cards[currentIndexValue]);
        }
        this.setState({ activeCards: cardsArray, game: "play", clicked: [], score: 0, level: "easy" });
        console.log(cardsArray);
        console.log(randomCardIndices);
        break;
      case "medium":
        while (randomCardIndices.length < 16) {
          let random = Math.trunc(Math.random() * 24);
          if (randomCardIndices.includes(random) !== true) {
            randomCardIndices.push(random);
          }
        }
        for (let i = 0; i < randomCardIndices.length; i++) {
          let currentIndexValue = randomCardIndices[i];
          cardsArray.push(cards[currentIndexValue]);
        }
        this.setState({ activeCards: cardsArray, game: "play", clicked: [], score: 0, level: "medium"  });
        console.log(cardsArray);
        console.log(randomCardIndices);
        break;
      case "hard":
        while (randomCardIndices.length < 24) {
          let random = Math.trunc(Math.random() * 24);
          if (randomCardIndices.includes(random) !== true) {
            randomCardIndices.push(random);
          }
        }
        for (let i = 0; i < randomCardIndices.length; i++) {
          let currentIndexValue = randomCardIndices[i];
          cardsArray.push(cards[currentIndexValue]);
        }
        this.setState({ activeCards: cardsArray, game: "play", clicked: [], score: 0, level: "hard"  });
        console.log(cardsArray);
        console.log(randomCardIndices);
        break;
      default:
        console.log("ERROR");
    }
    const chosenLevel = level;
    console.log(chosenLevel);
  }

  shuffle= (array) => {
    let currentIndex = array.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }

  checkClicked = id => {
    let currentLevel = this.state.level;
    let goal;
    switch (currentLevel) {
      case "easy": 
      goal = 7;
      break;
      case "medium": 
      goal = 15;
      break;
      case "hard": 
      goal = 23;
      break;
      default: 
      console.log("ERROR");
    } 
    let currentClicked = this.state.clicked;
    if (currentClicked.includes(id) !== true && currentClicked.length < goal) {
      let currentActive = this.state.activeCards;
      console.log(currentActive);
      let shuffled = this.shuffle(currentActive);
      console.log(shuffled);
      currentClicked.push(id);
      console.log(currentClicked);
      let currentScore = this.state.score;
      let currentTop = this.state.topScore;
      currentScore++;
      if (currentScore > currentTop) {
        this.setState({ topScore: currentScore });
      }
      this.setState({ clicked: currentClicked, score: currentScore, activeCards : shuffled });
    } else if (currentClicked.includes(id) !== true && currentClicked.length === goal) {
      let currentActive = this.state.activeCards;
      let shuffled = this.shuffle(currentActive);
      console.log(shuffled);
      let currentScore = this.state.score;
      let currentTop = this.state.topScore;
      currentScore++;
      if (currentScore > currentTop) {
        this.setState({ topScore: currentScore });
      }
      let currentWins = this.state.wins;
      currentWins++;
      this.setState({ wins: currentWins, game: "win", score: currentScore, activeCards : shuffled })
    } else {
      this.setState({ game: "over" });

    }

  }



  render() {
    let content;
    switch (this.state.game) {
      case "start":
        content = <GameOptions startGame={this.startGame} message="Choose your difficulty: " />
        break;
      case "play":
        content = this.state.activeCards.map(card => (
          <PhotoCard
            checkClicked={this.checkClicked}
            id={card.id}
            key={card.id}
            alt={card.alt}
            src={card.src}
          />
        ))
        break;
      case "over":
        content = <GameOptions startGame={this.startGame} message="Whoops! You had already clicked that image. Play Again? "/>
        break;
      case "win":
        content = <GameOptions startGame={this.startGame} message="You've successfully clicked through all the images. Play Again? "/>
        break;
      default:
        console.log("ERROR");
    }
    return (
      <Wrapper>
        <Header score={this.state.score} top={this.state.topScore} />
        <FlexContainer>{content}</FlexContainer>
      </Wrapper>
    );
  }
}

export default App;
