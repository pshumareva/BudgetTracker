import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";

const Budget = (props) => {
  const [value, setValue] = useState(props.budget);
  const { dispatch, budget } = useContext(AppContext);

  const handleSetBudget = (e) => {
    setValue(e.target.value);
    dispatch({
      type: "SET_BUDGET",
      payload: e.target.value,
    });
  };
  return (
    <div className="px-5 py-2 bg-teal-300 shadow-lg shadow-cyan-500/50 rounded-2xl">
      <span className="font-medium text-m">
        Budget:
        {
          <div className="flex">
            <span>$</span>
            <form className="ml-1">
              <input
                className="w-16 bg-teal-300 form-control"
                required="required"
                type="text"
                id="budget"
                value={value}
                onChange={handleSetBudget}
                placeholder="Budget"
              ></input>
            </form>
          </div>
        }
      </span>
    </div>
  );
};

export default Budget;
