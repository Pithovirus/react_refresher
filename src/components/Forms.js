import React, { useState } from "react";

export const Forms = () => {
  const [state, setState] = useState({
    name: "John Does",
    favoritePet: "Dog",
    rememberMe: false,
    title: "Miss",
  });
  // const [favoritePet] = useState("");

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
      <input
        name="name"
        value={state.name}
        onChange={(event) => handleChange(event, "name")}
      />
      <textarea
        name="favoritePet"
        value={state.favoritePet}
        onChange={(event) => handleChange(event, "favoritePet")}
      />
      <input
        name="rememberMe"
        type="checkbox"
        checked={state.rememberMe}
        onChange={(event) => handleChange(event, "rememberMe", true)}
      />
      <div>
        <select
          name="title"
          value={state.title}
          onChange={(event) => handleChange(event, "title")}
        >
          <option> Mr.</option>
          <option> Miss.</option>
          <option> Ms.</option>
          <option> Mrs.</option>
        </select>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};
