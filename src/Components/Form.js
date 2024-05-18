import "./Form.css";
import { useState } from "react";
export default function Form({ todos, setTodos }) {
  const [todo, setTodo] = useState({name:'',done:false});
  function handleSubmit(e) {
    e.preventDefault();
    setTodos([...todos, todo]);
    setTodo({name:'',done:false});
  }
  return (
    <>
      <form className="todoform" onSubmit={handleSubmit}>
        <div className="f-content">
          <input
            className="todoInput"
            onChange={(e) => setTodo({name:e.target.value,done:false})}
            type="text"
            value={todo.name}
            placeholder="Enter todo item..."
          />
          <button className="btn-sub-todo" type="submit">
            Add
          </button>
        </div>
      </form>
    </>
  );
}
