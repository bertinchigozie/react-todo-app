import { useEffect, useState } from "react";
import Todo from "./Todo";
import "./App.css";
import Todos from "./Todos";

function App() {
  const [inputText, setInputText] = useState("");
  const [todo, setTodo] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodo, setFilteredTodo] = useState([]);
  const [filterText, setFilterText] = useState("");

  useEffect(() => {
    const filterHandler = () => {
      if (status === "complete") {
        setFilteredTodo(todo.filter((item) => item.completed === true));
      } else if (status === "incomplete") {
        setFilteredTodo(todo.filter((item) => item.completed === false));
      } else {
        setFilteredTodo(todo);
      }
    };
    filterHandler();
  }, [todo, status]);

  useEffect(() => {
    const filtertTextHandler = () => {
      setFilteredTodo(
        todo.filter((item) => item.text.toLowerCase().indexOf(filterText) >= 0)
      );
    };
    filtertTextHandler();
  }, [todo, filterText]);

  return (
    <>
      <Todo
        todos={todo}
        setTodos={setTodo}
        inputText={inputText}
        setInputText={setInputText}
        setStatus={setStatus}
        filterText={filterText}
        setFilterText={setFilterText}
      />
      <Todos
        todos={todo}
        filteredTodo={filteredTodo}
        setTodos={setTodo}
        setInputText={setInputText}
      />
    </>
  );
}

export default App;
