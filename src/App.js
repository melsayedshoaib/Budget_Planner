import AddBudget from "./Components/AddBudget/AddBudget";
import Budget from "./Components/Budget/Budget";
import Expenses from "./Components/Expenses/Expenses";
import React from "react";
import Remaining from "./Components/Remaining/Remaining";
import Spent from "./Components/Spent/Spent";

export default function App() {
  return (
    <div className="bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-sky-400 to-indigo-900 min-h-screen">
      <h1 className="text-white text-2xl text-center ms-3 mb-3">
        Budget Planner Application
      </h1>
      <AddBudget />
      <h2 className="text-white text-2xl text-center ms-3 py-3">
        Your Budget Statistics
      </h2>
      <div className="flex flex-wrap gap-3">
        <div className="mb-3 md:ms-3 flex-1">
          <Budget />
        </div>
        <div className="mb-3 flex-1">
          <Remaining />
        </div>
        <div className="mb-3 md:me-3 flex-1">
          <Spent />
        </div>
      </div>
      <Expenses />
    </div>
  );
}
