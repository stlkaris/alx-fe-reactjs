import  React, { useState } from 'react'
import AddTodoForm from './AddTodoForm';

function TodoList () {
    const [todos, setTodos] = useState( [
        { id: 1, text: 'Learn React', completed: false},
        { id: 2, text: 'Build a Todo List', completed: false},
        { id: 3, text: 'Write Tests', completed: false}
    ]);
    
    const addTodo = (text) => {
        const newTodo = {
            id: todos.length + 1,
            text,
            completed: false
        }
        setTodos([...todos, newTodo])
    };

    const toggleTodo = (id) => {
        setTodos(
            todos.map((todo) => 
            todo.id === id ? {...todo, completed: !todo.completed}: todo
            )
        )
    };

    const deleteTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id))

    }


  return (
    <div>
      <h1>Todo List</h1>
      <AddTodoForm addTodo={addTodo} />
      <ul>
        {todos.map((todo) => (
            <li key={todo.id}>
                <span
                onClick={() => toggleTodo(todo.id)}
                style={{
                    textDecoration: todo.completed ? 'line-through' :'none',
                    cursor: 'pointer',
                }}>
                  {todo.text}
                </span>
                <button onClick={() => deleteTodo(todo.id)}>Delete</button>

            </li>
        ))}
      </ul>
    </div>
  )
}

export default TodoList
