import React from "react";
const Counter = () => {
  constructor(porps);
  {
    super(props);

    state = {
      count: 0,
    };
  }

  const increment = () => {
    setState({
      count: state.count + 1,
    });
  };

  const decrement = () => {
    setState({
      count: state.count - 1,
    });
  };

  return (
    <div>
      <div>Count: {state.count}</div>
      <button onClick={decrement}>Decrease</button>
      <button onClick={increment}>Increase</button>
    </div>
  );
};

export default Counter;
