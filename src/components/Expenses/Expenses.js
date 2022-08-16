import React, { useState } from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";

const Expense = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');
  const yearFilterChangeHandler = (selectedFilterYear) => {
    setFilteredYear(selectedFilterYear);
  }

  const filteredExpenses = props.expenses.filter(expense => Number(filteredYear) === expense.date.getFullYear());
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={filteredYear} onYearFilterChange={yearFilterChangeHandler} />
        <ExpensesList expenses={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expense;
