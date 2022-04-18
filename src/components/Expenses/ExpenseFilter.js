import './ExpenseFilter.css';

const ExpensesFilter = (props) => {

    //Forward Info to Expenses.JS
    const filterChangeHandler = (event) => {
        props.onChangeFilter(event.target.value);
    };

    return (
        <div className='expenses-filter'>
            <div className='expenses-filter-control'>
                <label>Filter by year</label>
                <select value={props.selectedYear} onChange={filterChangeHandler}>
                    {/*TODO: Add an 'All' Filter that will show all the results.*/}
                    <option value='2022'>2022</option>
                    <option value='2021'>2021</option>
                    <option value='2020'>2020</option>
                </select>
            </div>
        </div>
    );
};

export default ExpensesFilter;