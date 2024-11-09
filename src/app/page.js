"use client"
import { useState } from "react";
import Image from "next/image";
import styles from "./page.module.css";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";

export default function Home() {
  const [expenses, setExpenses] = useState([]);

  const handleAddExpense = (newExpense) => {
    setExpenses((prevExpenses) => [...prevExpenses, newExpense]);
  };

  return (
    <div className={styles.page}>
      <main className={styles.main}>
      <div style={{ padding: "20px", maxWidth: "600px", margin: "auto" }}>
      <h1>Expense Tracker</h1>
      <ExpenseForm onAddExpense={handleAddExpense} />
      <ExpenseList expenses={expenses} />
    </div>
      </main>
    </div>
  );
}
