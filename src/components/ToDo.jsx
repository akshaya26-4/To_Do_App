import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
function ToDo({task,toggleComplete,deleteList,editTodo}) {
  return (
    <div className='todo'>
      <p onClick={()=>{toggleComplete(task.id)}} className={`${task.completed?'completed':""}`}>{task.task}</p>
      <div className='icon'>
          <FontAwesomeIcon icon={faPenToSquare} onClick={()=>{editTodo(task.id)}}/>
          <FontAwesomeIcon icon={faTrash} onClick={()=>{deleteList(task.id)}}/>

      </div>
    </div>
  )
}

export default ToDo