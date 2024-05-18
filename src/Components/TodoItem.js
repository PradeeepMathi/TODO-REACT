import "./TodoItem.css";

export default function TodoItem({ item, todos, setTodos }) {
  // console.log({ item: item });
  console.log({ todos: todos });
  function handleDelete(item) {
    setTodos(todos.filter((todo) => todo !== item));
  }
  //   let todo = [{name:'pradeep',done:false},{name:'sam',done:true},{name:'raja',done:false}];
  // let name='sam'
  // const newTodo=todo.map((todos)=>todos.name === name ? {...todos,done:!todos.done}:todos)
  // console.log(newTodo)
  function handleDone(name){
    setTodos(todos.map((todo) => todo.name === name ? {...todo ,done: !todo.done} : todo))
    console.log(setTodos)
  }
  const doneStyle = item.done ? 'completed' : ''
  return (
    <div className="todo-item">
      <div className="todo-item-name">
       <span className={doneStyle} onClick={()=>handleDone(item.name)}>{item.name}</span>
        <span>
          <button onClick={() => handleDelete(item)} className="btn-delete">
            X
          </button>
        </span>
      </div>
      <hr className="todo-line" />
    </div>
  );
}
