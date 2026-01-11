import { useState,useEffect } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { v4 as uuidv4 } from 'uuid';


function App() {
  const [todo, settodo] = useState("")
  const [todos, setTodos] = useState([])

  useEffect(() => {
    let todostring = localStorage.getItem("todos")
    if(todostring) {
      let todos = JSON.parse(localStorage.getItem("todos"))
      setTodos(todos)
    }
  
    
  }, [])
  

  const handleAdd = () => {
    setTodos([...todos,{id:uuidv4() ,todo,isCompleted:false}])
    settodo("")
    saveToLOC()
  }
  const handleEdit = (e,id) => {
    let t = todos.filter(i=> i.id == id)
    settodo(t[0].todo)
    let newtodos = todos.filter(item => {
      return item.id !== id
    })
    setTodos(newtodos)
  }
  const handleDelete = (e,id) => {
    let newtodos = todos.filter(item => {
      return item.id !== id
    })

    setTodos(newtodos)
    saveToLOC()
  }
  const handlechange = (e) => {
    settodo(e.target.value)
    saveToLOC()
  }

  const handlecheck = (e) => {
    let id = e.target.name;
    let index = todos.findIndex(item=> {
      return item.id === id
    })

    let newtodos = [...todos];
    newtodos[index].isCompleted = !newtodos[index].isCompleted;
    setTodos(newtodos)
    saveToLOC()
  }

  const saveToLOC = (params) => {
    localStorage.setItem("todos",JSON.stringify(todos))
  }
  return (
    <>
      <Navbar />

      <div className="container bg-gray-500 mx-auto m-6 p-2 rounded-xl text-white min-h-[80vh]">
        <h2 className='font-bold text-black text-center'>TODOS- Manage your TODOS</h2>
          <h2 className='font-bold text-black my-2 mx-5'>Add todo</h2>
        <div className="addtodo flex">
          <input onChange={handlechange} value={todo} className='bg-white text-black w-full rounded-2xl px-2' type="text" />
          <button onClick={handleAdd} className='bg-black hover:bg-gray-900 font-bold rounded-md mx-2  text-white  p-1'>Save</button>
        </div>
        <h1 className='font-bold text-black my-2 mx-5'>Your todos</h1>

        <div className="todos">
           {todos.length == 0 && <div className='font-bold flex justify-center'> No Todos to Display </div>}
        {todos.map(item => {

        return <div key={item.id} className="todo flex justify-between w-1/2 my-3">
          {/* my todo lists*/}
          <div className='flex gap-8 align-middle mx-5'>
          <input onClick={handlecheck} type="checkbox" checked={item.isCompleted} name={item.id} id="" />
          <div className={item.isCompleted?"line-through":""}>{item.todo}</div>
          </div>
          <div className="buttons flex h-full ">
      
          <button onClick={(e)=>handleEdit(e,item.id)} className='bg-black hover:bg-gray-900 font-bold rounded-md mx-2 p-1  text-white  '>Edit</button>
          <button onClick={(e)=> {handleDelete(e,item.id)}} className='bg-black hover:bg-gray-900 font-bold rounded-md  mx-2 p-1 text-white '>Delete</button>
          </div>
          {/* my todo lists*/}
        </div>
   })}
   </div>

      </div>
    </>
  )
}

export default App
