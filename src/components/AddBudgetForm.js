import React from "react";

const AddBudgetForm = (props) => {
  const [value, setValue] = useState(props.budget);
  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="flex flex-col mb-1">
          <label for="name" className="font-medium">
            Budget
          </label>
          <input
            required="required"
            type="text"
            className="form-control"
            id="name"
            value={name}
            onChange={(event) => setValue(event.target.value)}
          ></input>
        </div>
      </form>
    </div>
  );
};

export default AddBudgetForm;
