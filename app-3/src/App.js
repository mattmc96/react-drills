import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

//Class Component

class App extends Component {
  constructor() {
    super();

    this.state = {
      filterList: "",
      groceries: [
        "spaghetti 🍝",
        "ice cream 🍦",
        "sushi🍣",
        "bologna 🥪",
        "cheese 🧀",
      ],
    };
  }
  handlechange(filter) {
    this.setState({ filterList: filter });
  }

  render() {
    var groceriesToDisplay = this.state.foods
      .filter((e, i) => {
        return e.includes(this.state.filterList);
      })
      .map((e, i) => {
        return <h2 key={i}>{e}</h2>;
      });

    return (
      <div className="App">
        <input
          onChange={(e) => this.handleChange(e.target.value)}
          type="text"
        />
        {groceriesToDisplay}
      </div>
    );
  }
}

export default App;
