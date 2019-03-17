import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import NavBar from "./components/NavBar";
import friends from "./friends.json";
import shuffle from "shuffle-array";
import Jumbotron from "./components/Title";

class App extends Component {
  state = {
    friends,
    score: 0,
    topScore: 0,
    rightWrong: "",
    clicked: []
  };

  // Shuffles the images when the page is reloaded
  componentDidMount() {
    this.handleShuffle();
  }

  // Updates the scores
  handleIncrement = () => {
    // set newscore variable to equal the current score plus 1
    const newScore = this.state.currentScore + 1;
    this.setState({
      currentScore: newScore,
      rightWrong: ""
    });
    // if the newscore is greater than or equal to the top score then the newscore becomes the top score
    if (newScore >= this.state.topScore) {
      this.setState({ topScore: newScore });
      // or the newscore is equal to 12, we pass in "you win" through the empty rightwrong string
    } else if (newScore === 12) {
      this.setState({ rightWrong: "You win!" });
    }
    // then shuffles the array
    this.shuffleCards();
  };

  handleReset = () => {
    this.setState({
      currentScore: 0,
      topScore: this.state.topScore,
      rightWrong: "Reset",
      clicked: []
    });
    this.handleShuffle();
  };

  // 
  handleClick = id => {
    if (this.state.clicked.indexOf(id) === -1) {
      this.handleIncrement();
      this.setState({ clicked: this.state.clicked.concat(id) });
    } else {
      this.handleReset();
    }
  };

  // shuffles the array of images
  shuffleCards(friends) {
    var i = friends.length,
      j = 0,
      temp;

    while (i--) {
      j = Math.floor(Math.random() * (i + 1));

      temp = friends[i];
      friends[i] = friends[j];
      friends[j] = temp;
    }
    return friends;
  }
  // 
  handleShuffle = () => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const friends = shuffle(this.state.friends);
    this.setState({ friends });
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <div>
        <NavBar
          score={this.state.currentScore}
          topScore={this.state.topScore}
          rightWrong={this.state.rightWrong}
        />
        <Wrapper>
          <Jumbotron>
            Clicky Game!
            <br />
            Click on an image to earn points but don't click on any more than
            once!
          </Jumbotron>
          {this.state.friends.map(friend => (
            <FriendCard
              key={friend.id}
              handleClick={this.handleClick}
              handleIncrement={this.handleIncrement}
              handleReset={this.handleReset}
              handleShuffle={this.handleShuffle}
              shuffleCards={this.handleClick.shuffleCards}
              id={friend.id}
              image={friend.image}
              onClick={this.handleShuffle}
            />
          ))}
          <Title />
        </Wrapper>
      </div>
    );
  }
}

export default App;
