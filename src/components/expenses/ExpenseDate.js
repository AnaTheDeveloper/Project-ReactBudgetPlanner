import './ExpenseDate.css';

function ExpenseDate(props){

    const day = props.date.toLocaleString('en-GB', {day: 'numeric'});
    const month = props.date.toLocaleString('en-GB', {month: 'long'})
    const year = props.date.toLocaleString('en-GB', {year: 'numeric'})


    return (

        <div>
            <div className="expense-item-date">
                <div className="expense-item-date-day-styling">{day}</div>
                <div className="expense-item-date-month-styling">{month}</div>
                <div className="expense-item-date-year-styling">{year}</div>
            </div>

        </div>

    )
}

export default ExpenseDate;