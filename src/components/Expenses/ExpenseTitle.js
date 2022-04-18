import './ExpenseTitle.css'
import React, {useState} from "react";

const ExpenseTitle = (props) => {

    const [title, setTitle] = useState(props.title);

    const changeTitleButtonOnClickHandler = () => {
        setTitle('Updated Title');
    };


    return (
        <div className="expense-item-description">
            <div className="expense-item-description-title-styling">{title}</div>
            <button onClick={changeTitleButtonOnClickHandler}>Change Title</button>
        </div>

    );
};

export default ExpenseTitle;