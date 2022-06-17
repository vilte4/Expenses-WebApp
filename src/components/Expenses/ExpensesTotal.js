import Card from "../UI/Card";
import "./ExpensesTotal.css";

const ExpensesTotal = (props) => {
  const totalAmount = props.expenses.reduce(
    (addAmount, currentValue) => (addAmount = addAmount + currentValue.amount),
    0
  );

  return (
    <Card className="expense-total">
      <div className="expense-total__description">
        <h2> Total Amount: </h2>
      </div>
      <div className="expense-total__price">{totalAmount}</div>
    </Card>
  );
};

export default ExpensesTotal;
