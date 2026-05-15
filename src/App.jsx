import { useState } from 'react'
import './App.css'
import TodoInput from './pages/TodoInput'
import TodoList from './pages/TodoList'
import { Todos } from "./hook/Todo"

function App() {
  const { todos, addtodo, toggletodo, deletetodo } = Todos()

  return (
    <>
    
      <div className='min-h-[90vh]'>
        <TodoInput addtext={addtodo} />
        <TodoList todos={todos} toggletodo={toggletodo} deletetodo={deletetodo} />
      </div>

    </>
  )
}

export default App
