import React from "react";
import "./styles.css";
import store from "./Redux/store";
import { addCounter } from "./Redux/Actions/counterAction";
export default class App extends React.Component {
  handleClick = () => {
    store.dispatch(addCounter());
  };
  render() {
    return (
      <div className="App">
        <h1>【筆記】 Redux Middleware 一步一步帶你看!!!</h1>
        <button onClick={this.handleClick}>點我發送Action</button>
      </div>
    );
  }
}
