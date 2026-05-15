import React from 'react'
import deleteicon from '../assets/delete.png'

const TodoItem = ({toggletodo ,todo ,deletetodo}) => {
  return (
    <div className={`flex justify-between mx-140 border border-gray-200 p-4 rounded-md my-4 ${todo.iscompleted ? "line-through " : ""}`}>
      <div className='flex gap-5'>
        <input
          type="checkbox"
          checked={todo.iscompleted}
          onChange={() => toggletodo(todo.id)}
        />
        <div className='w-70'>{todo.text}</div>
      </div>
        <button  onClick={()=> deletetodo(todo.id)}>
          <img className='w-4' src={deleteicon}/>
        </button>
    </div>
  )
}

export default TodoItem
