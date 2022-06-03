import React from 'react'

const Todo = ({todo}) => {

  let decoration = todo.completed ? '' : 'line-through'

  let background = todo.completed ? 
    'w-3/4 mx-auto shadow mt-4 px-4 py-4 rounded border border-green-300 bg-green-200' 
    : 'w-3/4 mx-auto shadow mt-4 px-4 py-4 rounded border border-red-300 bg-red-200'
  
  return(
    <div className={background}>
      <h1 className='font-bold text-xl text-center mb-2'>
        <p className={decoration}>
          {`${todo.title}`}
        </p>
      </h1>

      <div className='flex mt-2'>
        <button className='bg-green-600 hover:bg-green-700 p-1 rounded flex-1 mx-2'>{todo.completed ? 'Complete' : 'Re-do Todo'}</button>
        <button className='bg-yellow-600 hover:bg-yellow-700 p-1 rounded flex-1 mx-2'>edit Todo</button>
        <button className='bg-red-600 hover:bg-red-700 p-1 rounded flex-1 mx-2'>delete Todo</button>
      </div>
    </div>
  )
}

export default Todo