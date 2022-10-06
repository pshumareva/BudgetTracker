import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";
import ExpenseItem from "./ExpenseItem";

const ExpenseList = () => {
  const { expenses } = useContext(AppContext);

  const [filteredExpenses, setfilteredExpenses] = useState(expenses || []);

	useEffect(() => {
		setfilteredExpenses(expenses);
	}, [expenses]);

	const handleChange = (event) => {
		const searchResults = expenses.filter((filteredExpense) =>
			filteredExpense.name.toLowerCase().includes(event.target.value)
		);
	};
  return (
    <div >
    <input
				type='text'
				class='form-control mb-2 mr-sm-2'
				placeholder='Search expenses'
				onChange={handleChange}
			/>
      <ul>
      {filteredExpenses.map((expense) => (
					<ExpenseItem
						id={expense.id}
						name={expense.name}
						cost={expense.cost}
					/>
				))}
      </ul>
    </div>
  );
};

export default ExpenseList;
