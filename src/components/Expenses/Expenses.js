import React, { useState } from "react";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";

const Expense = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');
  const yearFilterChangeHandler = (selectedFilter) => {
    console.log(selectedFilter);
    setFilteredYear(selectedFilter);
  }
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={filteredYear} onYearFilterChange={yearFilterChangeHandler} />
        {props.expenses.map((expense) => {
          return (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          );
        })}
      </Card>
    </div>
  );
};

export default Expense;
