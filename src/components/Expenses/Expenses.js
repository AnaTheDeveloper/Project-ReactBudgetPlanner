import './Expenses.css';
import React, {useState} from "react";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpenseFilter";


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

            <ExpensesFilter selectedYear={filteredYear} onChangeFilter={filterYearChangeHandler}/>

            {filteredExpensesShownByYear.map((expense) => <ExpenseItem key={expense.id}
                                                       date={expense.date}
                                                       title={expense.title}
                                                       amount={expense.amount}/>)
            }

        </div>

    );

};

export default Expenses;