import React , { useContext } from "react";
import  { AppContext } from "../context/AppContext"

const Remaining = () => {
    const {budget , expenses} = useContext(AppContext);

    const totalExpenses = expenses.reduce((total, item) => {
		return (total = total + item.cost);
	}, 0);
    
    const overBudget = totalExpenses > budget ? "bg-red-500 shadow-red-700/50" : "bg-teal-300 shadow-cyan-500/50";
    console.log("budget",budget)
    
    return(
        <div className={` ${overBudget} px-5 py-2 shadow-lg rounded-2xl `}>
            <span className="font-medium text-m">Remaining: ${budget - totalExpenses}</span>
        </div>
    )
}

export default Remaining;