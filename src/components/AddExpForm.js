import React from "react";

const AddExpForm = () => {
  return (
    <form>
      <div className="flex flex-col mb-1">
        <label for="name" className="font-medium">
          Name
        </label>
        <input
          required="required"
          type="text"
          className="form-control"
          id="name"
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
        ></input>
      </div>
      <button type="submit" className="p-2 mt-2 font-medium border rounded-md bg-slate-300">
        Save
      </button>
    </form>
  );
};

export default AddExpForm;
