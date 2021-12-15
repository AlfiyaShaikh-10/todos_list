import React from 'react'

export default function TodoItem({todo,onDelete}) {
    return (
        <div className='container'>
            <h4>{todo.name}</h4>
            <p>{todo.desc}</p>
            <p>{todo.sno}</p>
            <button className=" btn btn-sm btn-danger" onClick={()=>{onDelete(todo)}}>Delete</button>
        </div>
    )
}
