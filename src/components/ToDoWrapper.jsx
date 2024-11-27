import React, { useState } from 'react'
import ToDoForm from './ToDoForm'
import {v4 as uuidv4} from "uuid"
import ToDo from './ToDo';
import EditToDoForm from './EditToDoForm';
uuidv4();
function ToDoWrapper() {
    let [todos,setTodos]=useState([])

    let addTodo=(todo)=>{
        setTodos([...todos,{id:uuidv4(),task:todo,
            completed:false,isEditing:false
        }])
        console.log(todos);
    }
    let toggleComplete=(id)=>{
        setTodos(todos.map(todo=>todo.id===id?{...todo,completed:!todo.completed}:todo))
    }
    let deleteList=(id)=>{
        setTodos(todos.filter(todo=>todo.id!==id))
    }
    let editTodo=(id)=>{
        setTodos(todos.map(todo=>todo.id===id ? {...todo,isEditing:!todo.isEditing}:todo))
    }
    let editTask=(task,id)=>{
        setTodos(todos.map(todo=>todo.id===id ? {...todo,task,isEditing:!todo.isEditing}:todo))
    }
  return (
    <div className='todo-Wrapper'>
        <h1>Get Things Done!</h1>
        <ToDoForm addTodo={addTodo}/>
        {todos.map((todo,index)=>(
            todo.isEditing ?(
                <EditToDoForm editTodo={editTask} key={index} task={todo}/>
            ):(
              
                <ToDo key={index} task={todo} toggleComplete={toggleComplete} deleteList={deleteList} editTodo={editTodo} />
              
            )
            
        ))}
    </div>
  )
}

export default ToDoWrapper