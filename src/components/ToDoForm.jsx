import React, { useState } from 'react'
function ToDoForm({addTodo}) {
    let [value,setvalue]=useState("")
    let updateInput=(e)=>{
        setvalue(e.target.value)
    }
    let handlesubmit=(e)=>{
        e.preventDefault()
        addTodo(value)
        setvalue("")
    }
  return (
    <form className='TodoForm' onSubmit={handlesubmit}>
        <input type='text' onChange={updateInput} value={value} className='todo-input' placeholder='What is the task today?'/>
        <button type='submit' className='todo-btn'>Add Task</button>
    </form>
  )
}

export default ToDoForm