import React, { useState } from 'react'

function AddTodoForm ({addTodo})  {
    const [text, setText] = useState()

    const handleSubmit = (e) => {
     e.preventDefault();
     if(text.trim()) {
        addTodo(text);
        setText('');
     }
    };
  return (
    <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Add a new todo' value="text" 
        onChange={(e) => setText(e.target.value)} />
        <button type="submit">Add Todo</button>
    </form>
  )
}

export default AddTodoForm
