import React from "react";
import { TiDelete } from "react-icons/ti";

function ExpenseItem(props) {
  return (
    <div>
      <li className="flex justify-between px-2 font-medium border bg-slate-200 border-slate-500">
        {props.name}
        <div className="flex items-center gap-4">
          <span className=""> ${props.cost}</span>
          <TiDelete className="text-red-500" />
        </div>
      </li>
    </div>
  );
}

export default ExpenseItem;
