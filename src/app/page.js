"use client";

import React, { useContext, useEffect } from "react";
import { ThemeContext } from "./contexts/ThemeContext";
import Form from "./components/Form";
import Header from "./components/Header";
import TODOHero from "./components/TODOHero";
import TODOList from "./components/TODOList";

function Home() {
  const [todos, setTodos] = React.useState([]);

  // Retrieve data from localStorage when components is loaded
  React.useEffect(() => {
    const storedTodos = localStorage.getItem("todos");
    if (storedTodos && storedTodos !== "undefined") {
      setTodos(JSON.parse(storedTodos));
    }
  }, []);

  const todos_completed = todos.filter(
    (todo) => todo.is_completed == true
  ).length;
  const total_todos = todos.length;

  const { isDarkMode, toggleTheme } = useContext(ThemeContext);
  useEffect(() => {
    // Apply dark or light class to the body
    if (isDarkMode) {
      document.body.classList.add("dark-mode");
      document.body.classList.remove("light-mode");
    } else {
      document.body.classList.add("light-mode");
      document.body.classList.remove("dark-mode");
    }
  }, [isDarkMode]);

  return (
    <div className="wrapper">
      <Header isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      <TODOHero todos_completed={todos_completed} total_todos={total_todos} />
      <Form todos={todos} setTodos={setTodos} />
      <TODOList todos={todos} setTodos={setTodos} />
    </div>
  );
}
export default Home;
