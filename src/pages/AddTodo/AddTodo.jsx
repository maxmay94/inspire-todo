import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router'

import AddTodoForm from './AddTodoForm'

const AddTodo = (props) => {
  const navigate = useNavigate()

  const[todo, setTodo] = useEffect('')

  return (
    <div>
      <AddTodoForm />
    </div>
  )
}

export default AddTodo