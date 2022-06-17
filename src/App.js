import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import { useState } from "react";

const dummy_expenses = [
  {
    id: "e1",
    title: "Car Insurance",
    amount: 49.9,
    date: new Date(2020, 3, 22),
  },
  { id: "e2", title: "Gas", amount: 10.9, date: new Date(2022, 3, 25) },
  { id: "e3", title: "Groceries", amount: 40, date: new Date(2020, 4, 12) },
  { id: "e4", title: "Makeup", amount: 5, date: new Date(2020, 2, 6) },
];

function App() {
  const [expenses, setExpenses] = useState(dummy_expenses);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
