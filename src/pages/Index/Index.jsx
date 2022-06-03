// Dependencies
import React, { useEffect, useState } from "react";

// Componenets
import Todo from "../../components/Todo/Todo";

// Services
import * as todoService from '../../services/todoService';

const Index = (props) => {
  const[todos, setTodos] = useState([{}])

  useEffect(() => {
    const fetchAllTodos = async() => {
      const todoData = await todoService.getAllTodos()
      setTodos(todoData)
    }
    fetchAllTodos()
  }, [])

 return (
   <div>
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
 )
}

export default Index