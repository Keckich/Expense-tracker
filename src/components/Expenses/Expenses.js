import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import './styles/Expenses.css'

function Expenses(props) {
  const items = props.expenses.map((item) => {
    return <ExpenseItem expense={item} />;
  });

  return <Card className="expenses">{items}</Card>;
}

export default Expenses;
