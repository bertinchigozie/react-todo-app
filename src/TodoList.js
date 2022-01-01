import React from "react";
import { FaCheck, FaEdit, FaTrash } from "react-icons/fa";

function TodoList({ todo, setTodo, todos, setInputText }) {
  const delBtn = () => {
    setTodo(todos.filter((item) => item.id !== todo.id));
  };
  const editBtn = () => {
    setTodo(todos.filter((item) => item.id !== todo.id));

    setInputText(todo.text);
  };
  const checkBtn = () => {
    setTodo(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return item;
      })
    );
  };
  return (
    <>
      <div>
        <ul key={todo.id}>
          <li className={`todo_list ${todo.completed ? "completed" : null}`}>
            {todo.text}
          </li>
          <button onClick={delBtn}>
            <FaTrash />
          </button>
          <button onClick={editBtn}>
            <FaEdit />
          </button>
          <button onClick={checkBtn}>
            <FaCheck />
          </button>
        </ul>
      </div>
    </>
  );
}

export default TodoList;
