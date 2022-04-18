import './NewExpense.css';
import React from "react";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {

    const onSaveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        console.log('Received Expense Data from the Expense Form: ', expenseData);
        props.onAddExpense(expenseData);
    };


    return (
        <div className="new-expense">
            <ExpenseForm onSaveExpenseData={onSaveExpenseDataHandler}/>
        </div>

    );

};

export default NewExpense;