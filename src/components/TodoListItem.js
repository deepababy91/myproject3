import React from 'react'
import {useState,useContext} from 'react'
import {EditOutlined,SaveOutlined,DeleteOutlined} from '@ant-design/icons';
import {DataContext} from './TodoContext'
import {Popconfirm} from 'antd';

export default function ListItem({todo,id,checkComplete,handleEditTodos}) {
    const [onEdit,setOnEdit]=useState(false)
    const [editValue,setEditValue]=useState(todo.name)
    const [todos,setTodos]=useContext(DataContext)//using context from TodoContext component

    const handleOnEdit = ()=>{
        setOnEdit(true)
    } 
    const handleSave=id=>{
        setOnEdit(false)
        if(editValue){
            handleEditTodos(editValue,id)
        }else{
            setEditValue(todo.name)
        }
    }
    //deleteTask function to delete each task
    const deleteTask=(id)=>{
    const newTodos = [...todos];
    newTodos.splice(id, 1);
    setTodos(newTodos);  
    }
    //if on edit mode, user can edit the task and click on save icon(from antd).Edit and save is disabled for completed task
    if(onEdit)
    {
    return(
         <li>
           <input type="text" id="editValue" value={editValue} name="editValue" onChange={e =>setEditValue(e.target.value)} />
            <SaveOutlined onClick={()=>handleSave(id)} style={{color:'purple',fontSize:'20px'}} className={todo.complete?"disabled1":""} />
         </li>
          )
    }
    //if not on edit ,will display edit icon and delete icon,those will be disabled if the task got completed
    else{
    return (
         <li>
           <label htmlFor={id} className={todo.complete?"active":""}>
           <input type="checkbox" id={id} checked={todo.complete} onChange={() =>checkComplete(id)}/>{todo.name}
          </label>
             <span className="wrapper">
                <EditOutlined  className={todo.complete?"disabled1":""} onClick={handleOnEdit} style={{color:'dodgerblue',fontSize:'22px'}}/>&nbsp;&nbsp;
        {/*Popconfirm from antd to confirm whether the user want to delete the task or not,while on confirm it will exceute deleteTask function*/}
                <Popconfirm
                          title="Are you sure you want to delete this task?"
                          onConfirm={()=>deleteTask(id)}
                          // onCancel={cancel}
                          okText="Yes"
                          cancelText="No"
                >
        <DeleteOutlined className={todo.complete?"disabled1":""} style={{color:'red',fontSize:'20px',cursor:'pointer'}}/>  </Popconfirm></span>
        </li>       
           )
         }
 }
