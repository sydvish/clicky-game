
import React, { Component } from "react";
import "./style.css";

class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-default navbar-fixed-top">
         <ul>
          <li className="itemLeft">Clicky Game!</li>
          <li className="itemCenter">{this.props.rightWrong}</li>
          <li className="itemRight">Score: {this.props.score} <br></br>Top Score: {this.props.topScore}</li>
        </ul>
      </nav>
    );
  }
}

export default NavBar;