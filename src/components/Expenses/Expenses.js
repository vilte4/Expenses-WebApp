import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
import ExpensesTotal from "./ExpensesTotal";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");
  const yearChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <li style={{ "list-style-type": "none" }}>
      <Card className="expenses">
        <ExpensesFilter
          selectedYear={filteredYear}
          onYearChange={yearChangeHandler}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
        {filteredExpenses.length > 0 && (
          <ExpensesTotal expenses={filteredExpenses} />
        )}
      </Card>
    </li>
  );
}

export default Expenses;
