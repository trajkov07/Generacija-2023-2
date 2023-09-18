import React from "react";

export class IncrementClass extends React.Component {
  constructor(props) {
    super(props); // this is a must
    // ova e istoto kako i useState
    this.state = {
      counter: 0,
    };
  }

  componentDidMount() {
    // this is called on the first render
    console.log("this is component did mount");
  }

  componentDidUpdate() {
    // this is called on every state change
    console.log("this is component did update");
  }

  increment = () => {
    this.setState({ counter: this.state.counter + 1 });
  };

  render() {
    return (
      <div>
        <button onClick={this.increment}>Increment</button>
        <h2>Counter value: {this.state.counter}</h2>
      </div>
    );
  }
}
