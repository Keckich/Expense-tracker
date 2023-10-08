import { useState } from "react";

import "./styles/ExpenseItem.css";

import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card"

function ExpenseItem(props) {
  const [title, setTitle] = useState(props.expense.title);

  const changeTitle = () => {
    setTitle('Updated');
    console.log(title)
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.expense.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.expense.amount}</div>
      </div>
      <button onClick={changeTitle}>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;
