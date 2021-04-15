import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { changeName } from '../../actions';

function Form() {
  const [name, setName] = useState("");
  const dispatch = useDispatch()

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(changeName(name))
    setName("");
  }

  function handleInput(e, inputToSet) {
    inputToSet(e.target.value);
  }
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">name:</label>
      <input
        required={true}
        onChange={(event) => handleInput(event, setName)}
        type="text"
        name="name"
        id="name"
        value={name}
      />

      <input type="submit" name="submit" id="submit" value="submit" />
    </form>
  );
}

export default Form;
