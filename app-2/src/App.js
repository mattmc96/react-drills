import React, { Component } from "react";
import "./App.css";

//Class Component

class App extends Component {
  constructor() {
    super();

    this.state = {
      foods: [
        "spaghetti 🍝",
        "ice cream 🍦",
        "sushi🍣",
        "bologna 🥪",
        "cheese 🧀",
      ],
    };
  }

  render() {
    let foodsToDisplay = this.state.foods.map((element, index) => {
      return <h1 key={index}>{element}</h1>;
    });
    return <div className="App">{foodsToDisplay}</div>;
  }
}

export default App;
