import { useState } from "react"
export function NewTodoForm({onSubmit}){

  const [newItem, setNewItem] = useState("")

  function handleSubmit(event) {
    event.preventDefault()
    if(newItem === "") return
    onSubmit(newItem)
    setNewItem("")
  }

    return (<form onSubmit={handleSubmit} className = "new-item-form">
      <div className="form-row">
        <label htmlFor="item">New Item</label>
        <input type="text" onChange={e=>setNewItem(e.target.value)} id = "item" value = {newItem}/>
      </div>
      <button className="btn">Add</button>
    </form>)
}