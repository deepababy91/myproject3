import React from 'react'
import './App.css';
import TodoFormInput from './components/TodoFormInput'
import TodoList from './components/TodoList'
import Filter from './components/Filter'
import {TodoContext} from './components/TodoContext'

function Todo() {
   return (
    <TodoContext>
    <div className="Todo">
      <TodoFormInput/>
      <TodoList/>
      <Filter/>              
    </div>
    </TodoContext>
  );
}

export default Todo;