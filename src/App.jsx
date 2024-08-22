import { useState } from "react"
import Todolist from "./component/todo"

import Todoinp from "./components/inp"

function App() {
     const [todos1, setTodos1] = useState('')
     const [todos2, setTodos2] = useState('')
     const [todos3, setTodos3] = useState('')

const [todo, setTodo] = useState([
  
   
])

const handel = ()=>{
    const todosArr = [...todo, {
       todos1 ,
       todos2,
       todos3,
       id: Date.now(),
       completed : false,
    }]

    setTodo([...todosArr])
    setTodos1('')
    setTodos2('')
    setTodos3('')
    console.log(todo);
    
}




  return (
    <>
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden mt-28">
    <div className="px-4 py-2">
        <h1 className="text-gray-800 font-bold text-2xl uppercase">To-Do List</h1>
    </div>

   
        <div  className="divide-y divide-gray-200 px-4">

<Todoinp value1 = {todos1} value2 = {todos2}  value3 = {todos3} onChange1={(t)=> setTodos1(t.target.value)} onChange2={(l)=> setTodos2(l.target.value)} onChange3={(a)=> setTodos3(a.target.value)}
    onClick={handel}/>



   <Todolist todo = {todo}/>
    </div>   
    </div>
    </>
  )
}

export default App
