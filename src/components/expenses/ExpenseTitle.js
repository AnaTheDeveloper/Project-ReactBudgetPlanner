import './ExpenseTitle.css'

const ExpenseTitle = (props) => {


    return (
        <div className="expense-item-description">
            <div className="expense-item-description-title-styling">{props.title}</div>
        </div>

    )
}

export default ExpenseTitle;