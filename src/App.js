import React from "react";
import "./App.css";
import axios from "axios";
export class App extends React.Component {
  state = {
    advice: "",
  };
  componentDidMount() {
    this.fectchAdvice();
    console.log("componentDidMount");
  }

  //method means function inside a class
  // no const before fectchAdvice
  fectchAdvice = () => {
    axios
      .get("https://api.adviceslip.com/advice")
      .then((response) => {
        const { advice } = response.data.slip;
        //console.log(response.data.slip.advice);
        this.setState({ advice });
        console.log(advice);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  render() {
    const { advice } = this.state;
    return (
      <div className="app">
        <div className="card">
          <h1 className="heading">{advice}</h1>
          <button className="button" onClick={this.fectchAdvice}>
            <span>Give Me An Advice!</span>
          </button>
        </div>
      </div>
    );
  }
}

export default App;
