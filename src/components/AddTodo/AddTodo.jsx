import React, { useState, useEffect } from 'react'

const AddTodo = (props) => {

  // const[todo, setTodo] = useState('')

  const handleSubmit = async() => {
    try{

    } catch(err) {
      throw err
    }
  }

  return (
    <div className="w-3/4 mx-auto shadow mt-10 px-4 py-4 rounded border border-gray-300 flex">
      <form action="" className='w-full'>
        <div className='px-5'>
          <label className='font-bold text-xl'>Enter Todo Item</label>
          <input
            className='w-full'
            required
            name='todoItem'
            autoComplete='off'
            placeholder='What do you need to do?'  
          />
        </div>
      </form>
      <button className="bg-green-500 hover:bg-green-600 p-1 rounded">Add Todo</button>
    </div>
  )
}

export default AddTodo