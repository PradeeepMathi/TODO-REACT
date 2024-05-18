import "./Todolist.css";
import TodoItem from "./TodoItem";
export default function Todolist({ todos, setTodos }) {
  const sortedTodos = todos.slice().sort((a,b)=>Number(a.done)-Number(b.done))
  return (
    <div className="todo-list">
      {sortedTodos.map((item) => (
        <TodoItem key={item.name} item={item} todos={todos} setTodos={setTodos} />
      ))}
      {/* {console.log({ todosllll: todos })} */}
    </div>
  );
}
