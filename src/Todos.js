import React from "react";
import TodoList from "./TodoList";

function Todos({ todos, setTodos, filteredTodo, setInputText }) {
  return (
    <div>
      {filteredTodo.map((todo, id) => {
        return (
          <TodoList
            key={id}
            todos={todos}
            todo={todo}
            setTodo={setTodos}
            setInputText={setInputText}
            id={id}
          />
        );
      })}
    </div>
  );
}

export default Todos;
