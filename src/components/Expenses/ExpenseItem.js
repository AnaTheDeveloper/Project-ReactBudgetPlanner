import './ExpenseItem.css';
import ExpenseDate from "./ExpenseDate";
import ExpenseTitle from "./ExpenseTitle";
import ExpensePrice from "./ExpensePrice";

const ExpenseItem = (props) => {

    return (
        <div className="expense-item">

            <ExpenseDate date={props.date}/>

            <div className="expense-item-description">

                <ExpenseTitle title={props.title}/>

                <ExpensePrice amount={props.amount}/>

            </div>

        </div>
    );

};

export default ExpenseItem;