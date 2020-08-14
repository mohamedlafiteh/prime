import React, { Component } from "react";

class Prime extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: null,
    };
  }
  handleChange = (e) => {
    this.setState({
      inputValue: e.target.value,
      result: null,
    });
  };
  handleClick = (e) => {
    e.preventDefault();
    let userNumber = this.state.inputValue;
    let text = "";

    //check if it is prime
    if (userNumber % 2 === 0) {
      text = "Even";
    } else {
      text = "Prime";
    }
    this.setState({
      result: text,
    });
  };

  render() {
    const { inputValue, result } = this.state;

    return (
      <div>
        <h1> Please inter a number</h1>
        <input
          onChange={this.handleChange}
          type='number'
          name='number'
          value={inputValue}
        />
        <button onClick={this.handleClick}>Submit</button>
        <p>{result}</p>
      </div>
    );
  }
}

export default Prime;
