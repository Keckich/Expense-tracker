import { useState } from "react";

import "./styles/Expenses.css";

import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState('2020');
  
  const selectYearHandler = (year) => {
    setFilteredYear(year);
  };

  const items = props.expenses.map((item) => {
    return <ExpenseItem expense={item} />;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={filteredYear} onSelectYear={selectYearHandler} />
        {items}
      </Card>
    </div>
  );
}

export default Expenses;
