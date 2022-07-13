import React, { Component } from "react";

import Button from "./Button";

class Card extends Component {
  render() {
    return (
      <div className="p-3 bg-zinc-800 rounded shadow-lg shadow-black">
        <img src={this.props.image} alt={this.props.title} />
        <p>{this.props.title}</p>
        <Button label="Add to favorite" />
      </div>
    );
  }
}

class Card2 extends Component {
  render() {
    return (
      <div className="p-3 flex flex-col justify-between bg-neutral-500 rounded shadow-lg shadow-black">
        <img
          src={
            this.props.image
              ? `https://image.tmdb.org/t/p/w500${this.props.image}`
              : "https://via.placeholder.com/500x750?text=No+Image"
          }
          alt={this.props.title}
          height="750"
        />
        <p className="text-center text-white font-bold">{this.props.title}</p>
        <p className="text-white">{this.props.votes}</p>
        <Button label="Add to favorite" />
      </div>
    );
  }
}

// 1. export default
// export default Card;
// 2. named export
export { Card, Card2 };
