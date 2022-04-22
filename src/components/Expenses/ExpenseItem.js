import './ExpenseItem.css';
import ExpenseDate from "./ExpenseDate";
import ExpenseTitle from "./ExpenseTitle";
import ExpensePrice from "./ExpensePrice";

const ExpenseItem = (props) => {

    return (
        <div>
            <li>
                <div className="expense-item">

                    <ExpenseDate date={props.date}/>

                    <div className="expense-item-description">

                        <ExpenseTitle title={props.title}/>

                        <ExpensePrice amount={props.amount}/>

                    </div>

                </div>
            </li>
        </div>

    );

};

export default ExpenseItem;