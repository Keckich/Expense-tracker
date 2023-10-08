import './styles/NewExpense.css'

import ExpenseForm from './ExpenseForm'

function NewExpense(props) {
  const saveExpanseDataHandler = (exnteredExpenseData) => {
    const expenseData = {
      ...exnteredExpenseData,
      id: Math.random().toString()
    };

    props.onAddExpense(expenseData);
  }

  return (
    <div className='new-expense'>
      <ExpenseForm onSaveExpenseData={saveExpanseDataHandler} />
    </div>
  );
}

export default NewExpense;
