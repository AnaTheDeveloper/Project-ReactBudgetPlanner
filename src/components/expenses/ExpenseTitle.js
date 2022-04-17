import './ExpenseTitle.css'

function ExpenseTitle(props) {


    return (
        <div className="expense-item-description">
            <div className="expense-item-description-title-styling">{props.title}</div>
        </div>

    )
}

export default ExpenseTitle;