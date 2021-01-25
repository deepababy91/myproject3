import React, {useContext,useState} from 'react'
import {DataContext} from './TodoContext'
import {Popconfirm,Tooltip,Empty,Button, notification,Tabs } from 'antd';


function Filter() {
    const [checkAll,setCheckAll]=useState(false)
    const [todos,setTodos]=useContext(DataContext)//using context from TodoContext
  
   
      const handleCheckAll = () =>{
        const newTodos=[...todos]
        newTodos.forEach(todo=>{
        todo.complete= !checkAll
        })
        setTodos(newTodos)
        setCheckAll(!checkAll)
    }
    
    //function to filter only active todos or not completed todos
     const newTodosComplete=()=>{
        return todos.filter(todo=>todo.complete===false)
    }
    
    //function to filter completed todos
    const completed=()=>{
       return todos.filter(todo=>todo.complete===true) 
    }
   
    //function to delete all todos.
     const deleteTodo = (id)=>{
        const newTodos=[...todos]
        newTodos.splice(id, todos.length);
        setTodos(newTodos)
    }
   //antd notification function to show the completed and active tasks
   const openNotification = () => {
       
   notification.open({
    
    message: <h3 style={{fontFamily: 'Oleo Script',color:'orange'}}>Hey,your task status</h3>,
    description:
      <p>You have {newTodosComplete().length} active tasks and {completed().length} completed tasks</p>,
  
     });
    }
    //antd Tab component to show all,active and completed filters,I added styling to the filtered results
      const { TabPane } = Tabs;
 
    const Demo = () => (
    <Tabs defaultActiveKey="1" type="card">
    <TabPane tab="All" key="1" >
        <div style={{paddingBottom:'25px', wordBreak:'break-word',paddingRight:'35px'}}>
      {todos.map((filteredTodo,id) => (
        <li key={id} style={{listStyle:'circle',textTransform:'capitalize',fontSize:'16px',fontFamily: 'Oleo Script',fontWeight:'normal'}}>
          {filteredTodo.name}
        </li>
      ))}
    </div>
    </TabPane>
    <TabPane tab="Active" key="2" >
     <div style={{paddingBottom:'25px', wordBreak:'break-word',paddingRight:'35px'}}>
      {todos.filter(todo => todo.complete===false).map((filteredTodo,id) => (
        <li key={id}style={{color:'darkblue',listStyle:'circle',textTransform:'capitalize',fontSize:'16px',fontFamily: 'Oleo Script',fontWeight:'normal'}}>
          {filteredTodo.name}
        </li>
      ))}
    </div>
    </TabPane>
    <TabPane tab="Completed" key="3" >
       <div style={{paddingBottom:'25px', wordBreak:'break-word',paddingRight:'35px'}}>
      {todos.filter(todo => todo.complete===true).map((filteredTodo,id) => (
        <li key={id} style={{color:'green',listStyle:'circle',textTransform:'capitalize',fontSize:'16px',fontFamily: 'Oleo Script',fontWeight:'normal'}}>
          {filteredTodo.name}
        </li>
      ))}
    </div>
    </TabPane>
  </Tabs>
);


    return (    
        <div>
        {/*if no tasks show empty component from antd else show the task status, clear all,mark all complete ,filter sections*/} 
        {todos.length===0? 
      <div className="empty"><Empty description="Nothing to do"/></div>:
     <div className="row">
    
     {/*Tab component*/}
    <Demo/>
     <Button type="primary" onClick={openNotification} style={{width:'96%',marginBottom:'20px',borderRadius:'20px'}}>
  Click to know about the task status
  </Button>
    
     
{/*Popconfirm display to make sure whether the user want to delete all the items,onConfirm use deleteTodo function whenever user click yes */}
           <Popconfirm
                         title="Are you sure you want to delete all tasks?"
                         onConfirm={deleteTodo}
                         // onCancel={cancel}
                          okText="Yes"
                          cancelText="No"
                      >
     
      <button id="delete" style={{width:'96%',borderRadius:'20px'}} >Clear all</button>
     </Popconfirm>
     {/*User select checkbox to mark all tasks complete*/}
        <label htmlFor="all" className="allinput">
      <Tooltip placement="left" title="Check to complete all tasks and uncheck to make it active again"><input type="checkbox" name="all" id="all"
      onChange={handleCheckAll} checked={checkAll} /></Tooltip>Mark all complete 
       </label>
      </div> 
        }   
        </div>
    )
}

export default Filter