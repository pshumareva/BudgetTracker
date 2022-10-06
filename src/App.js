import React from "react";
import Budget from "./components/Budget.js";
import Remaining from "./components/Remaining.js";
import ExpenseTotal from "./components/ExpenseTotal.js";
import ExpenseList from "./components/ExpenseList.js";
import AddExpForm from "./components/AddExpForm.js";
import { AppProvider } from "./context/AppContext";

const App = () => {
  return (
    <AppProvider>
      <div className="w-[95%] mx-auto">
        <div className="w-[500px] bg-slate-300 px-4 pb-4 mt-4 border-2 border-slate-500 rounded-2xl">
          <div className="mb-6 ">
            <h1 className="text-[40px] font-semibold mb-4 text-slate-800 text-center">
              Budget Tracker
            </h1>
            <div className="flex gap-4">
              <Budget />
              <Remaining />
              <ExpenseTotal />
            </div>
          </div>
          <div className="mb-6">
            <h2 className="text-[36px] font-medium mb-4 text-slate-800">
              Expenses
            </h2>
            <ExpenseList />
          </div>
          <div>
            <h2 className="text-[36px] font-medium mb-2 text-slate-800">
              Add Expense
            </h2>
            <AddExpForm />
          </div>
        </div>
       
        
      </div>
    </AppProvider>
  );
};

export default App;
