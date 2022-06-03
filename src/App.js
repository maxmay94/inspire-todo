// Dependencies
import React, { useEffect, useState } from "react";

// Componenets
import Todo from "./components/Todo/Todo";

// Services
import * as todoService from './services/todoService';

// Styles
import "./tailwind.output.css";

// TODO Endpoint https://jsonplaceholder.typicode.com/todos

const App = () => {

  const[todos, setTodos] = useState([{}])

  useEffect(() => {
    const fetchAllTodos = async() => {
      const todoData = await todoService.getAllTodos()
      setTodos(todoData)
    }
    fetchAllTodos()
  }, [])

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="w-3/4 mx-auto shadow mt-24 px-4 py-4 rounded border border-gray-300">
        <h1 className="font-bold">Todo List</h1>
      </div>
      <div>
        {
          todos&&
          todos?.map((todo, i) => (
            <div key={i}> 
              <Todo todo={todo} />
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default App;
