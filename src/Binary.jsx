import React, { Component } from "react";

class Binary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: null,
      status: null,
      text: "",
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
    let b = false;
    let cal = null;

    //change number to string and reverse
    let change = userNumber.split("").reverse();
    //validate user input
    let allNumbers = [3, 4, 5, 6, 7, 8, 9];

    for (var i = 0; i < change.length; i++) {
      if (allNumbers.includes(Number(change[i]))) {
        b = true;
        text = '"it is not a valid number';
      } else {
        cal += Math.pow(2, i) * parseInt(change[i]);
      }
    }
    this.setState({
      result: cal,
      status: b,
      text: text,
    });
  };
  render() {
    const { result, inputValue, text, status } = this.state;
    return (
      <div>
        <h1> Decode binary number :</h1>
        <input
          onChange={this.handleChange}
          type='number'
          name='number'
          value={inputValue}
        />
        <button onClick={this.handleClick}>Submit</button>
        {status ? <p>{text}</p> : <p>{result}</p>}
      </div>
    );
  }
}

export default Binary;
