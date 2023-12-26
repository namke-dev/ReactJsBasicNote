import { useEffect, useRef, useState } from "react";
import "./CSS/Todo.css";
import TodoItems from "./TodoItems";

let count = 0;
const Todo = () => {
  const [todolist, setTodoList] = useState([]);
  const inputRef = useRef(null);

  const add = () => {
    setTodoList([
      ...todolist,
      { no: count++, text: inputRef.current.value, display: "" },
    ]);
    console.log(todolist);
    inputRef.current.value = "";
    localStorage.setItem("todolist_count", count);
  };

  useEffect(() => {
    setTodoList(JSON.parse(localStorage.getItem("todolist")));
    count = localStorage.getItem("todolist_count");
  }, []);

  useEffect(() => {
    setTimeout(() => {
      localStorage.setItem("todolist", JSON.stringify(todolist));
    }, 100);
  }, [todolist]);

  return (
    <div className="todo">
      <div className="todo-header">To-Do list</div>
      <div className="todo-add">
        <input
          ref={inputRef}
          type="text"
          placeholder="Add your task"
          className="todo-input"
        ></input>
        <div onClick={() => add()} className="todo-add-btn">
          Add
        </div>
      </div>
      <div className="todo-list">
        {todolist.map((item, index) => {
          return (
            <TodoItems
              key={index}
              setTodoList={setTodoList}
              no={item.no}
              display={item.display}
              text={item.text}
            ></TodoItems>
          );
        })}
      </div>
    </div>
  );
};

export default Todo;
