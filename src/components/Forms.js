import React, { useState } from "react";

export const Forms = () => {
  const [name, setName] = useState("John");

  const handleChange = () => {
    console.log("called");
  };

  return (
    <div>
      <input onChange={handleChange} />
      <>{name}</>
      <button>Press</button>
    </div>
  );
};
