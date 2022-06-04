// Dependencies
import React, { useEffect, useState } from "react";

// Componenets
import Todo from "../../components/Todo/Todo";

// Services
import { getAllTodos, deleteTodo, completeTodo, editTodo, addTodo } from '../../services/todoService';

const Index = (props) => {
  const[todos, setTodos] = useState([{}])

  useEffect(() => {
    const fetchAllTodos = async() => {
      const todoData = await getAllTodos()
      setTodos(todoData)
    }
    fetchAllTodos()

    // return () => { setTodos([{}]) }

  }, [])

  const handleAddTodo = async() => {
    try {
      await addTodo()
      const todoData = await getAllTodos()
      setTodos(todoData)
    } catch (err) {
      throw err
    }
  }

  const handleDeleteTodo = async(todoId) => {
    try {
      await deleteTodo(todoId)
      const todoData = await getAllTodos()
      setTodos(todoData)
    } catch (err) {
      throw err
    }
  } 

  const handleCompleteTodo = async(todoId, done) => {
    try {
      await completeTodo(todoId, done)
      const todoData = await getAllTodos()
      setTodos(todoData)
    } catch(err) {
      throw err
    }
  }

  const handleEditTodo = async(todoId, done) => {
    try {
      await editTodo(todoId, done)
      const todoData = await getAllTodos()
      setTodos(todoData)
    } catch(err) {
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
              <Todo todo={todo} handleAddTodo={handleAddTodo} handleDeleteTodo={handleDeleteTodo} 
                handleCompleteTodo={handleCompleteTodo} handleEditTodo={handleEditTodo} 
              />
            </div>
          ))
        }
      </div>
   </div>
 )
}

export default Index