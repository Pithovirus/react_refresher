import React from "react";

export const Body = (props) => (
  <div>
    <p> {props.text}</p>
    <p> {props.text2}</p>
    <p> {props.myFunct(1, 2)}</p>
  </div>
);

export const Body2 = () => {
  return (
    <div>
      <div>Heyyyyyyyyyyyyyyyyy</div>
    </div>
  );
};
