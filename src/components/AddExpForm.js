import React, { useState, useContext } from "react";
import { AppContext } from "../context/AppContext";
import { v4 as uuidv4 } from "uuid";

const AddExpForm = () => {
  const { dispatch } = useContext(AppContext);
  
  const [name, setName] = useState('');
  const [cost, setCost] = useState('');

  const onSubmit = (event) => {
    event.preventDefault();

   
    const expense = {
      id: uuidv4(),
      name,
      cost: parseInt(cost),
    };

    dispatch({
      type: "ADD_EXPENSE",
      payload: expense,
    });
  };
  
  return (
    <form onSubmit={onSubmit}>
      <div className="flex flex-col mb-1">
        <label for="name" className="font-medium">
          Name
        </label>
        <input
          required="required"
          type="text"
          className="form-control"
          id="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        ></input>
      </div>
      <div className="flex flex-col mb-1">
        <label for="cost" className="font-medium">
          Cost
        </label>
        <input
          required="required"
          type="text"
          className="form-control"
          id="cost"
          value={cost}
          onChange={(event) => setCost(event.target.value)}
        ></input>
      </div>
      <button
        type="submit"
        className="p-2 mt-2 font-medium bg-teal-300 border rounded-md "
      >
        Save
      </button>
    </form>
  );
};

export default AddExpForm;
