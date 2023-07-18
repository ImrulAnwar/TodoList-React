import "./styles.css"
import { useState, useEffect } from "react"
import {NewTodoForm} from "./NewTodoForm"
import {TodoList} from "./TodoList"

function App() {
  const [todos, setTodos] = useState(()=>{
    const localvalue = localStorage.getItem("ITEMS")
    if (localvalue == null) return []
    return JSON.parse(localvalue)
  })

  useEffect(() =>{
    localStorage.setItem("ITEMS", JSON.stringify(todos))
  }, [todos])

  function addTodo(title){
    setTodos((currentTodo)=>{
        return [...currentTodo, {id: crypto.randomUUID(), title, completed: false}]
      }
    )
  }

  function toggoleTodo(id, completed) {
    setTodos((currentTodo)=>{
      return currentTodo.map((todo)=>{
        if (todo.id === id) {
          return {...todo,completed}
        }
        return todo
      })
    })
  }

  function deleteTodo(id){
    setTodos((currentTodo)=>{
      return currentTodo.filter((todo)=> todo.id !== id)
    })
  }

  return (
  <>
    <NewTodoForm onSubmit = {addTodo}/>
    <h1 className="header">Todo List</h1>
    <TodoList todos = {todos} toggleTodo={toggoleTodo} deleteTodo={deleteTodo}/>
  </>
  )
}

export default App
