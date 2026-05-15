import { useState } from "react"


const TodoInput = ({addtext}) => {
    const [task, settask] = useState("")

    const addtodo = ()=> {
        console.log("add function")
        const text = task.trim()
        console.log(text)
        addtext(text)
        settask("")
    }

    const onkeydown = (e)=> {
        if(e.key === "Enter") {
            addtodo()
        }
    }

  return (
    <div className="flex px-40 justify-center mx-140 py-7 gap-4 border border-gray-200  my-20 rounded-md">
        <div>
            <input onKeyDown={onkeydown} onChange={(e)=> settask(e.target.value)} className="border border-gray-200 p-2 rounded-md" type="text" />
        </div>
        <button onClick={()=> {addtodo()}} className="border border-gray-300 p-2 rounded-md bg-[#4BD5FF] text-gray-800" >Add</button>
    </div>
  )
}

export default TodoInput