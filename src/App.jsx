import "./styles.css"
import { useState } from "react"

function App() {
  const [newItem, setNewItem] = useState("")
  const [todos, setTodos] = useState([])

  function handleSubmit(event) {
    event.preventDefault()
    setTodos((currentTodo)=>{
        return [...currentTodo, {id: crypto.randomUUID(), title: newItem, completed: false}]
      }
    )
    setNewItem("")
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
    <form onSubmit={handleSubmit} className = "new-item-form">
      <div className="form-row">
        <label htmlFor="item">New Item</label>
        <input type="text" onChange={e=>setNewItem(e.target.value)} id = "item" value = {newItem}/>
      </div>
      <button className="btn">Add</button>
    </form>  
    <h1 className="header">Todo List</h1>
    <ul className="list">
      {todos.map((todo)=>{
        return <li key = {todo.id}>
          <label>
            <input type="checkbox" checked = {todo.completed} onChange={e=>toggoleTodo(todo.id, e.target.checked)}/>
            {todo.title}
          </label>
          <button onClick={()=> deleteTodo(todo.id)} className="btn btn-danger">Delete</button>
        </li> 
      })}
      
    </ul>
  </>
  )
}

export default App
