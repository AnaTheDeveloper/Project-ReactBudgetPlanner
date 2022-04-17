import './ExpensePrice.css';

const ExpensePrice = (props) => {

    return (
        <div className="expense-item-price">
            <div className="expense-item-price-styling">£{props.amount}</div>
        </div>
    )
}

export default ExpensePrice;