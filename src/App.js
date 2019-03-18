import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import NavBar from "./components/NavBar";
import friends from "./friends.json";
import shuffle from "shuffle-array";
shuffle(friends);
// import Jumbotron from "./components/Title";

class App extends Component {
  state = {
    friends,
    score: 0,
    topScore: 0,
    rightWrong: "",
    clicked: []
  };

 

  // Updates the scores
  handleIncrement = () => {
    // set newscore variable to equal the current score plus 1
    const newScore = this.state.score + 1;
    this.setState({
      score: newScore,
      rightWrong: ""
    });
    // if the newscore is greater than or equal to the top score then the newscore becomes the top score
    if (newScore >= this.state.topScore) {
      this.setState({ topScore: newScore });
      this.setState({ rightWrong: "You beat the top score!" });
      // or the newscore is equal to 12, we pass in "you win" through the empty rightwrong string
    } else if (newScore === 12) {
      this.setState({ rightWrong: "You win!" });
    }
    // then shuffles the array
    // this.shuffleCards();
  };

  // resets the score and resets the game
  handleReset = () => {
    this.setState({
      score: 0,
      // topScore: this.state.topScore,
      rightWrong: "Reset",
      clicked: []
    });
    // this.handleShuffle();
  };

  //
  handleClick = id => {
    const { friends } = this.state;
    const newFriends = [...friends];
    shuffle(newFriends);
    if (this.state.clicked.indexOf(id) === -1) {
      this.handleIncrement();
      this.setState({ clicked: this.state.clicked.concat(id) });
    } else {
      this.handleReset();
    }
    this.setState({friends: newFriends});
  };

  // handleShuffle = () => {
  //   // Filter this.state.friends for friends with an id not equal to the id being removed
  //   const friends = shuffle(this.state.friends);
  //   this.setState({ friends });
  // };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <div>
        <NavBar
          score={this.state.score}
          topScore={this.state.topScore}
          rightWrong={this.state.rightWrong}
        />
        <Wrapper>
          <Title>
            Clicky Game!
            <br />
            Click on an image to earn points but don't click on any more than
            once!
          </Title>
          {this.state.friends.map(friend => (
            <FriendCard
              key={friend.id}
              handleClick={this.handleClick}
              handleIncrement={this.handleIncrement}
              handleReset={this.handleReset}
              // handleShuffle={this.handleShuffle}
              // shuffleCards={this.shuffleCards}
              id={friend.id}
              image={friend.image}
              // onClick={this.handleShuffle}
            />
          ))}
        </Wrapper>
      </div>
    );
  }
}

export default App;
