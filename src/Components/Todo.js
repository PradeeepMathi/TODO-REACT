import { useState } from "react";
import Form from "./Form";
import Todolist from "./Todolist";
import Footer from "./Footer";
export default function Todo() {
  const [todos, setTodos] = useState([]);
  const completedTodo = todos.filter((todo) => todo.done).length
  const totoalTodos= todos.length
  return (
    <>
      <Form todos={todos} setTodos={setTodos} />
      <Todolist todos={todos} setTodos={setTodos} />
      <Footer completedTodo={completedTodo} totoalTodos={totoalTodos}/>
    </>
  );
}
