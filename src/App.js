//Imports.
import './App.css';
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import React, {useState} from "react";

//Logic.

const DummyData = [
    {date: new Date(2022, 3, 24),title: 'Car Insurance', amount: 200.98},
    {date: new Date(2021, 9, 12),title: 'Wifi', amount: 58.67},
    {date: new Date(2020, 6, 4),title: 'Genshin', amount: 8.99}
];

const App = () => {

    const [expenses, setExpenses] = useState(DummyData);

    const addExpenseHandler = (expense) => {
        setExpenses(prevExpenses => {
            return [expense, ...prevExpenses];
        });
    };


//HTML Page That is Returned After Logic is Called. (JSK->HTML running in JS).
  return (
    <div>
        <p className="app-title-styling">Budget Planner</p>
        <NewExpense onAddExpense={addExpenseHandler}/>
        <Expenses items={expenses}/>
    </div>
  );
};

//Makes Function Discoverable.
export default App;
