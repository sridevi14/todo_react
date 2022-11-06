import React,   { useState}from 'react';

import Form from './components/Form'

import TodoList from './components/TodoList'

import './App.css';

function App() {

  const [inputText, setInputText] = useState(" ");
  const [todos, setTodos] = useState([]);
  return (
    <div className="App">
      <header className="App-header">
    
      </header>

      <Form setTodos={setTodos} todos={todos} setInputText={setInputText} inputText={ inputText}/>
      <TodoList setTodos={setTodos} todos={todos}/>
    </div>
  );
}

export default App;
