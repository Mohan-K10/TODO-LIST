import React from 'react'
import TodoItem from './TodoItem'


const TodoList = ({todos  ,toggletodo ,deletetodo}) => {
  return (
    <div>
    
      {todos.map((task)=> (
         <TodoItem key={task.id} todo={task} deletetodo={deletetodo} toggletodo={toggletodo} />
      ))}

      </div>
  )
}

export default TodoList
