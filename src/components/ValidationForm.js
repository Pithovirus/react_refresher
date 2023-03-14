import React, { useState } from "react";

export const ValidationForm = () => {
  const [state, setState] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const isCheckbox = event.target.type === "checkbox";
    setState({
      [event.target.name]: isCheckbox
        ? event.target.checked
        : event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(state);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          name="Name"
          placeholder="Name"
          value={state.name}
          onChange={handleChange}
        />
      </div>
      <div>
        <input
          name="Email"
          placeholder="Email"
          value={state.email}
          onChange={handleChange}
        />
      </div>
      <div>
        <input
          type="Password"
          name="Password"
          placeholder="Password"
          value={state.password}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};
