import { useState ,useEffect } from "react";

export const Todos = () => {
    const [todos, settodos] = useState(()=> {
        const savedtodos = localStorage.getItem("todos")
        const parsedtodos = savedtodos ? JSON.parse(savedtodos) : []
        return Array.isArray(parsedtodos) ? parsedtodos : []
    })

    useEffect(() => {
      localStorage.setItem("todos" , JSON.stringify(todos))
    }, [todos])
    


    const addtodo = (text)=> {
        const trimmedtext = text.trim()
        if (!trimmedtext) return

        settodos([...todos ,{id: Date.now() , text: trimmedtext , iscompleted : false}])
    }

    const deletetodo = (id)=> {
        settodos(todos.filter((task)=> task.id !== id))
    }

    const toggletodo = (id)=> {
        settodos(todos.map((task)=> {
            return task.id === id ? {...task , iscompleted : !task.iscompleted} : task
        }))
    }
    return {todos ,addtodo ,deletetodo ,toggletodo}
}

