import './Expenses.css';
import ExpenseItem from "./ExpenseItem";


const Expenses = (props) => {


    return (
        <div className="expenses">
            <ExpenseItem date={props.items[0].date}
                         title={props.items[0].title}
                         amount={props.items[0].amount}>
            </ExpenseItem>
            <ExpenseItem date={props.items[1].date}
                         title={props.items[1].title}
                         amount={props.items[1].amount}>
            </ExpenseItem>

        </div>

    )

}

export default Expenses;