import './Expenses.css';
import React, {useState} from "react";
import ExpensesFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";


const Expenses = (props) => {

    const [filteredYear, setFilteredYear] = useState('2022');

    //Receive Info from ExpensesFilter.JS in parameter
    const filterYearChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    };

    const filteredExpensesShownByYear = (props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    }));

    return (

        <div className="expenses">

            <ExpensesChart expenses={filteredExpensesShownByYear}/>

            <ExpensesFilter selectedYear={filteredYear} onChangeFilter={filterYearChangeHandler}/>

            <ExpensesList items={filteredExpensesShownByYear}/>

        </div>

    );

};

export default Expenses;