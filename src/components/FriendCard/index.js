import React from "react";
import "./style.css";

function FriendCard(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} onClick={()=> props.handleClick(props.id)}/>
      </div>
      <span></span>
      
    </div>
  );
}

export default FriendCard;
