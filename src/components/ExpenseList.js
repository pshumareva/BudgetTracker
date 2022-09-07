import React from "react";
import ExpenseItem from "./ExpenseItem";

function ExpenseList() {
  
    const expenses = [
      { id: 12, name: "shopping", cost: 40 },
      { id: 13, name: "holiday", cost: 400 },
      { id: 14, name: "car service", cost: 50 },
    ];
 
  return <div>
    <ul>
        {expenses.map((expense) => (
            <ExpenseItem id={expense.id} name={expense.name} cost={expense.cost}/>))}
    </ul>
  </div>;
}

export default ExpenseList;
