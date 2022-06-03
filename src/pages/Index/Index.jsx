// Dependencies
import React, { useEffect, useState } from "react";

// Componenets
import Todo from "../../components/Todo/Todo";

// Services
import { getAllTodos, deleteTodo } from '../../services/todoService';

const Index = (props) => {
  const[todos, setTodos] = useState([{}])

  useEffect(() => {
    const fetchAllTodos = async() => {
      const todoData = await getAllTodos()
      setTodos(todoData)
    }
    fetchAllTodos()
  }, [todos])

  const handleDeleteTodo = async(todoId) => {
    try {
      await deleteTodo(todoId)
      const todoData = await getAllTodos()
      setTodos(todoData)
    } catch (err) {
      throw err
    }
  } 

 return (
   <div>
      <div>
        {
          todos&&
          todos?.map((todo, i) => (
            <div key={i}> 
              <Todo todo={todo} id={todo.id} handleDeleteTodo={handleDeleteTodo} />
            </div>
          ))
        }
      </div>
   </div>
 )
}

export default Index