import './ExpenseForm.css';
import React, {useState} from "react";

const ExpenseForm = (props) => {

    const [enteredDate, setEnteredDate] = useState('');
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');


// Using Multiple States as one.
    // const [userInput, setUserInput] = useState({
    //     enteredDate: '',
    //     enteredTitle: '',
    //     enteredAmount: ''
    // })
    //
    // const dateChangeHandler = (event) => {
    //     ...userInput,
    //         enteredDate: event.target.value,
    // };
//This state depends on the previous state.
    //     const dateChangeHandler = (event) => {
    //         setUserInput((prevState) => {
    //             return {...prevState, enteredDate: event.target.value}
    //         });
    //     };

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
    };

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
    };

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
    };

    const submitHandler = (event) => {
        //Stops page from reloading.
        event.preventDefault();

        const expenseData = {
            date: new Date(enteredDate),
            title: enteredTitle,
            amount: enteredAmount
        };
        //Sending data to New Expense (Child to Parent)
        props.onSaveExpenseData(expenseData);
        //Two-way binding with value={} and state. Clears form after user has clicked submit button.
        setEnteredDate('');
        setEnteredTitle('');
        setEnteredAmount('');
    };

    return (
        <div>
            <form onSubmit={submitHandler}>
                <div className="new-expense-controls">
                    <div className="new-expense-control">
                        <label>Date</label>
                        <input type='date' min="2020-01-01" max="2100-01-01" value={enteredDate} onChange={dateChangeHandler}/>
                    </div>
                    <div className="new-expense-control">
                        <label>Title</label>
                        <input type='text' value={enteredTitle} onChange={titleChangeHandler}/>
                    </div>
                    <div className="new-expense-control">
                        <label>Amount</label>
                        <input type='number' min ="0.01" step="0.01" value={enteredAmount} onChange={amountChangeHandler}/>
                    </div>
                </div>
                <div className="new-expense-actions">
                    <button type="submit">Add Expense</button>
                </div>
            </form>
        </div>
    );

};

export default ExpenseForm;