import React, { Component } from "react";

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  componentDidMount() {
    this.timerId = setInterval(() => this.tick(), 1000);
  }

  tick() {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return <p className="counterText">{this.state.count} seconds on this website.</p>;
  }
}
export default Timer;