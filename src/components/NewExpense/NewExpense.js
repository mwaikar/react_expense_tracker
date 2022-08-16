import React, { useState } from "react";

import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [isShowForm, setIsShowForm] = useState(false);
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    props.onAddExpense(expenseData);
    setIsShowForm(false);
  };
  const cancelExpenseHandler = (isFormShow) => {
    setIsShowForm(isFormShow);
  };

  const formVisibilityHandler = () => {
    setIsShowForm(true);
  };
  return (
    <div className="new-expense">
      {isShowForm ? (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancelExpense={cancelExpenseHandler}
        />
      ) : (
        <button onClick={formVisibilityHandler}>Add new Expense</button>
      )}
    </div>
  );
};

export default NewExpense;
