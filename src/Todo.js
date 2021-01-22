import React from 'react'
import './App.css';
import TodoFormInput from './components/TodoFormInput'
import TodoList from './components/TodoList'
import Filter from './components/Filter'
import {TodoContext} from './components/TodoContext'
import { DatePicker} from 'antd';

function Todo() {
   return (
    <TodoContext>
    <div className="Todo">
     <h1>To Do List</h1><DatePicker style={{cursor:'pointer'}}/>
      <TodoFormInput/>
      <TodoList/>
      <Filter/>              
    </div>
    </TodoContext>
  );
}

export default Todo;