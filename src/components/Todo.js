import React from 'react';
import '../App.css';


const Todo = ({ todo, setTodos, todos,input }) => {
  

 


  const deleteHandler = () => {
    setTodos(todos.filter((el) =>
      el.id !== todo.id
    ));
  };

  const completeHandler = () => {
  
    setTodos(todos.map((item) => {
      if (item.id === todo.id) {
        return {
          ...item, completed:!item.completed
        }
      }
      return item;
    }
    
    
    ));
  
  }

  return (
    <div className="Todo_item">

     
      <h1 >{todo.text}</h1>
      <div className="todo">
      <div className='trash_icon'><i className="fa fa-trash" aria-hidden="true" onClick={deleteHandler} ></i></div>

      <div className={todo.completed ? 'active' : ''}>
        <div className='tick_icon'>
          <i className="fa fa-check" aria-hidden="true" onClick={completeHandler}>
            
          </i>
      </div>
      </div> </div>
     
      
    </div>
  );
}

export default Todo;