import React, { useContext } from "react";
import { TiDelete } from "react-icons/ti";
import { AppContext } from "../context/AppContext";

const ExpenseItem = (props) => {
  const { dispatch } = useContext(AppContext);

  const handleDeleteExpense = () => {
    dispatch({
      type:"DELETE_EXPENSE",
      payload:props.id,
    })
  }

  return (
    <div>
      <li className="flex justify-between px-2 font-medium border bg-slate-200 border-slate-500">
        {props.name}
        <div className="flex items-center gap-4">
          <span className=""> ${props.cost}</span>
          <TiDelete className="text-red-500" onClick={handleDeleteExpense}/>
        </div>
      </li>
    </div>
  );
};

export default ExpenseItem;
