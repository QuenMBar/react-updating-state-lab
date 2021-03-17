// Code DigitalClicker Component Here
import React, { Component } from "react";

export default class DigitalClicker extends Component {
  state = {
    timesClicked: 0,
  };

  handelClick = () => {
    this.setState({
      timesClicked: this.state.timesClicked + 1,
    });
  };

  render() {
    return (
      <button onClick={this.handelClick}>
        <label>{this.state.timesClicked}</label>
      </button>
    );
  }
}
