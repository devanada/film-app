import React, { Component } from "react";

import Header from "../components/Header";
import Button from "../components/Button";

export default class TestPage extends Component {
  state = {
    counter: 0,
    email: "",
    password: "",
    show: true,
  };

  handleIncrement = () => {
    this.setState({ counter: this.state.counter + 1 });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <div className="w-full h-screen">
        <Header />
        <Button label="INCREMENT" onClick={() => this.handleIncrement()} />
        <Button
          label="RESET"
          onClick={() => this.setState({ show: !this.state.show })}
        />
        {this.state.show && <p>{this.state.counter}</p>}
        <form onSubmit={this.handleSubmit}>
          {/* <form onSubmit={(e) => this.handleSubmit(e)}> */}
          <label>
            email:{" "}
            <input
              value={this.state.email}
              onChange={(e) => {
                this.setState({ email: e.target.value });
              }}
            />
          </label>
          <label>
            password:{" "}
            <input
              value={this.state.password}
              onChange={(e) => {
                this.setState({ password: e.target.value });
              }}
            />
          </label>
          <Button label="BUTTON" type="submit" />
        </form>
      </div>
    );
  }
}
