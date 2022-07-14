import React, { Component } from "react";
import { Link } from "react-router-dom";

import Button from "./Button";
import { WithRouter } from "../utils/Navigation";

class Card extends Component {
  render() {
    return (
      <div className="p-3 flex flex-col justify-between bg-neutral-500 rounded shadow-lg shadow-black">
        <Link to={`/detail/${this.props.data.id}`}>
          <img
            src={
              this.props.data.poster_path
                ? `https://image.tmdb.org/t/p/w500${this.props.data.poster_path}`
                : "https://via.placeholder.com/500x750?text=No+Image"
            }
            alt={this.props.data.title}
            height="750"
          />
          <p className="text-center text-white font-bold">
            {this.props.data.title}
          </p>
        </Link>
        <Button
          label="Add to favorite"
          onClick={() => this.props.navigate(`/detail/${this.props.data.id}`)}
        />
      </div>
    );
  }
}

// 1. export default
export default WithRouter(Card);
// 2. named export
// export { Card };
