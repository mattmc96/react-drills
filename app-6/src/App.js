import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Todo from "./Todo";
//Class = constructor, super, render
class App extends Component {
  constructor() {
    super();

    this.state = {
      list: [],
      input: "",
    };

    this.handleAddTask = this.handleAddTask.bind(this);
  }

  handleInputChange(value) {
    this.setState({ input: value });
  }

  //Review event listeners
  handleAddTask() {
    this.setState({
      list: [...this.state.list, this.state.input],
      input: "",
    });
  }

  render() {
    let list = this.state.list.map((element, index) => {
      return <Todo key={index} task={element} />;
    });

    return (
      <div className="App" style={{ color: "orange" }}>
        <h1>My todo list</h1>

        <div>
          <input
            value={this.state.input}
            placeholder="           Enter New Task   "
            onChange={(e) => this.handleInputChange(e.target.value)}
          />

          <button onClick={this.handleAddTask}>ADD</button>
        </div>
        {list}
      </div>
    );
  }
}

export default App;
