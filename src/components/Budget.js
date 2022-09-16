import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Budget = () => {
  const { budget } = useContext(AppContext);
  
  return (
    <div className="px-5 py-2 bg-teal-300 shadow-lg shadow-cyan-500/50 rounded-2xl">
      <span className="font-medium text-m">Budget: ${budget} </span>
    </div>
  );
};

export default Budget;
