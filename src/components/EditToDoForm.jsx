import React, { useState } from 'react'
function EditToDoForm({editTodo,task}) {
    let [value,setvalue]=useState(task.task)
    let updateInput=(e)=>{
        setvalue(e.target.value)
    }
    let handlesubmit=(e)=>{
        e.preventDefault()
        editTodo(value,task.id)
        setvalue("")
    }
  return (
    <form className='TodoForm' onSubmit={handlesubmit}>
        <input type='text' onChange={updateInput} value={value} className='todo-input' placeholder='Update Task'/>
        <button type='submit' className='todo-btn'>Update Task</button>
    </form>
  )
}

export default EditToDoForm