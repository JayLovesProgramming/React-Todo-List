import "./styles.css"
import { useState } from "react"
import { NewTodoForm } from "./NewTodoForm"
import { TodoList } from "./ToDoList"

export default function toDoList() {
  const [todos, setTodos] = useState([])

  // Add a todo to the list
  function addTodo(title) {
    setTodos ((currentTodos) => {
      return [
      ...currentTodos, 
      { id: crypto.randomUUID(), title: title, completed: false },
      ]
    })
  }

  // Toggles a todo from completed and not completed
  function toggleTodo(id, completed) {
    setTodos(currentTodos => {
      return currentTodos.map(todo => {
        if (todo.id == id) {
          return {...todo, completed}
        }
        return todo
      })
    })
  }

  // Delete a current todo
  function deleteTodo(id) {
    setTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id !== id)
    })
  }
  
  console.log(todos)
  // return "Hi"
  return (
  <>
  <NewTodoForm onSubmit = {addTodo}/>
    <h1 className="header">Jay's To Do List</h1> 
    <TodoList 
      todos = {todos} 
      toggleTodo={toggleTodo} 
      deleteTodo={deleteTodo}
    />
  </>
  )
}