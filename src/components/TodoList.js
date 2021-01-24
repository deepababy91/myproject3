import React, {useContext} from 'react'
import TodoListItem from './TodoListItem'
import {DataContext} from './TodoContext'

export default function TodoList() {
    const [todos,setTodos]=useContext(DataContext);
    console.log(todos)
    
    const switchComplete=id=>{
        const newTodos=[...todos]
        newTodos.forEach((todo,index)=>{
            if(index===id){
                todo.complete= !todo.complete
            }    
    })
    setTodos(newTodos)
}

    const handleEditTodos=(editValue,id)=>{
        const newTodos=[...todos]
        newTodos.forEach((todo,index) =>{
            if(index===id){
                todo.name=editValue
            }
        })
        setTodos(newTodos)
    }

    return (
    <ul>
        {
            todos.map((todo,index) => (
                <TodoListItem todo={todo} key={index} id={index}
                checkComplete={switchComplete} handleEditTodos={handleEditTodos}/>

            ))
        }
        </ul>
    )
}
