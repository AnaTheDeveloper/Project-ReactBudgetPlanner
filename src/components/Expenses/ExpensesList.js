import './ExpensesList.css';
import React, {useState} from "react";
import ExpenseItem from "./ExpenseItem";

const ExpensesList = (props) => {

    //If year selected has no content in it return error msg. Else return content.
    if (props.items.length === 0) {
        return <p className="expenses-filter-no-expenses-found-message">No Expenses Found</p>
    };

    return (
        <div>
            <ul className="expenses-list">
                {props.items.map((expense) => (
                    <ExpenseItem key={expense.id} date={expense.date} title={expense.title} amount={expense.amount}/>))
                }
            </ul>
        </div>

    );

};

export default ExpensesList;