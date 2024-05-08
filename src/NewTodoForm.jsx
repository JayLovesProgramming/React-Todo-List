import { useState } from "react"

export function NewTodoForm({ onSubmit }) {
  const [newItem, setNewItem] = useState("")

  function handleSubmit(e){
    e.preventDefault()
    if (newItem === "") return
    onSubmit(newItem)
    setNewItem("")
  } 

  return (
  <form onSubmit= {handleSubmit} className = "new-item-form">
    <div className = "form-row">
      <label className="title" htmlFor = "item">Create A To Do</label>
      <input 
      value={newItem} 
      onChange={e => setNewItem(e.target.value)} 
      type="text" id="item" />
    </div>
    <button className = "btn">
      Add To Do
    </button>
  </form>
)}