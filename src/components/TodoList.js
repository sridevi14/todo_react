import React,{useState} from 'react';

import Todo from './Todo'

import '../App.css';

const TodoList = ({ todos,setTodos }) => {
  
  const [input,setInput] = useState('');

  const searchHandler = (e) => {
    
    var lowerCase = e.target.value.toLowerCase();
    setInput(lowerCase)
  }



  const filteredData = todos.filter((el) => {
    //if no input the return the original
    if (input === '') {
        return el;
    }
    //return the item which contains the user input
    else {
        return el.text.toLowerCase().includes(input)
    }
})

  if(todos.length > 0){
    var items =<h2 className="todo_topics">ToDos List</h2>
}else{
     items =<h2 className="todo_topics">No Todo work</h2>
}

  return (
    <div className="Todos_list"> 
      <div className='todo_boxes'>


      <div className="todo_topics">

     {items}
      </div>
      
        <div className='search_here'>
        <input className="search"  onChange={searchHandler} type="text" placeholder='Search here'>
       </input> 

        </div>
      
      </div>
      
      
      {filteredData.map((todo )=> (
        <Todo key={todo.id} todo={todo}
        todos={todos}
          setTodos={setTodos}
          
        />
      ))}
      
     
    
    </div>
  );
}

export default TodoList;