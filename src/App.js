import React, { useState } from 'react';
import Header from "./components/Header";
import Form from "./components/Form";
import './App.css';
import TodosList from './components/TodosList';
const App = () => {
  const[input,setInput] = useState("");
  const[todos,setTodos] = useState([]);
  const[editTodo,setEditTodo] = useState(null);
  return (
    <div className = "container">
      <div className = "app-wrapper">
        <div>
          <Header/>
        </div>
        <div>
          <Form
          input={input}
          setInput={setInput}
          todos = {todos}
          setTodos = {setTodos}
          />
        </div>
        <div>
          <TodosList todos = {todos} setTodos={setTodos} editTodo = {editTodo} setEditTodo = {setEditTodo}/>
          
        </div>
      </div>
    </div>
  );
};

export default App;