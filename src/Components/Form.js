import React, { useState } from "react";
export const ListForm = ({ addName }) => {
  const [name, setName] = useState("");
  const handleOnChange = (e) => {
    e.preventDefault();
    const { value } = e.target;
    setName(value);
  };
  console.log(name);

  const handleOnSubmit = e => {
    e.preventDefault();
    addName(name);
  };
  return (
    <div>
      <form action="" onSubmit={handleOnSubmit}>
        <p>Enter the full name here</p>
        <input type="text" onChange={handleOnChange} />
        <br />
        <br />
        <button type="submit">Add name</button>
      </form>
    </div>
  );
};
