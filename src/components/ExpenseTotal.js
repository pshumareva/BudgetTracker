import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const ExpenseTotal = () => {
  const { expenses } = useContext(AppContext);

  const totalExpenses = expenses.reduce((total, item) => {
    return (total += item.cost);
  }, 0);

  return (
    <div className="px-5 py-2 bg-teal-300 shadow-lg shadow-cyan-500/50 rounded-2xl">
      <span className="font-medium text-m">Spent so far: ${totalExpenses}</span>
    </div>
  );
};

export default ExpenseTotal;
