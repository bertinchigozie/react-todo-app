import React from "react";
import { FaPlus } from "react-icons/fa";

function Todo({
  setInputText,
  inputText,
  todos,
  setTodos,
  filterText,
  setFilterText,
  setStatus,
}) {
  const inputHandler = (e) => {
    setInputText(e.target.value);
  };

  const textHandler = (e) => {
    setFilterText(e.target.value);
  };

  const inputSubmit = (e) => {
    e.preventDefault();

    if (inputText === "") {
      alert("please fill in all spaces ");
    } else {
      setTodos([
        ...todos,
        {
          text: inputText,
          id: Math.floor(Math.random() * 1000),
          completed: false,
        },
      ]);
      setInputText("");
    }
  };
  const statusHandler = (e) => {
    setStatus(e.target.value);
  };
  return (
    <>
      <h1>First React Todo App </h1>
      <form className="todo__form">
        <input
          placeholder="Filter To-do's"
          value={filterText}
          onChange={textHandler}
          type="text"
        />
        <input
          placeholder="Please enter a task"
          value={inputText}
          onChange={inputHandler}
          type="text"
          className="todo__input"
        />

        <button type="submit" onClick={inputSubmit}>
          <FaPlus />
        </button>
        <select name="todos" className="select" onChange={statusHandler}>
          <option value="all">all</option>
          <option value="complete">complete</option>
          <option value="incomplete">incomplete</option>
        </select>
      </form>
    </>
  );
}

export default Todo;
