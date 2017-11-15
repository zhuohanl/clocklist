import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import ClockList from "./ClockList";

class App extends Component {
  render() {
    return (
      <div className="App">
        <ClockList />
      </div>
    );
  }
}

export default App;
