import logo from "../logo.svg";
import React from "react";
import Counter2 from "./Counter";
import Counter from "./Counter";

const Header = (props) => {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>{props.title}</p>
      <div>{JSON.stringify(props.myObj)}</div>
      <div>{props.myArr[0]}</div>
      <div>{props.myFunct(10, 12)}</div>
      <Counter />
      <Counter2 />
    </header>
  );
};

export default Header;
