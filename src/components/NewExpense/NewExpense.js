import './NewExpense.css';
import React, {useState} from "react";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {

    const [isAddExpenseFeatureShown, setIsAddExpenseFeatureShown] = useState(false);

    const onSaveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.floor(Math.random() * 20).toString()
        };
        props.onAddExpense(expenseData);
        setIsAddExpenseFeatureShown(false);
    };

    const addExpenseFeatureShownHandler = () => {
        setIsAddExpenseFeatureShown(true);
    };

    const closeAddExpenseFeatureHandler = () => {
        setIsAddExpenseFeatureShown(false);
    };

    return (
        <div className="new-expense">
            {! isAddExpenseFeatureShown && <button onClick={addExpenseFeatureShownHandler}>Add New Expense</button>}
            {isAddExpenseFeatureShown && <ExpenseForm onSaveExpenseData={onSaveExpenseDataHandler} onCancel={closeAddExpenseFeatureHandler}/>}
        </div>

    );

};

export default NewExpense;