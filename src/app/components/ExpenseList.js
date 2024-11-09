const ExpenseList = ({ expenses }) => {
    const totalAmount = expenses.reduce((sum, expense) => sum + expense.amount, 0);
  
    return (
      <div>
        <h3>Expenses</h3>
        <ul>
          {expenses.map((expense) => (
            <li key={expense.id} style={{color:'black'}}>
              {expense.title}: ${expense.amount.toFixed(2)}
            </li>
          ))}
        </ul>
        <h4>Total: ${totalAmount.toFixed(2)}</h4>
      </div>
    );
  };
  
  export default ExpenseList;
  