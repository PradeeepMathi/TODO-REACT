import './Footer.css'
export default function Footer({completedTodo,totoalTodos}){
    return <div className='Footer'>
        <span className='item-l'>completed Todos: {completedTodo}</span>
        <span className='item-T'>Total Todos:{totoalTodos}</span>
    </div>
    
}