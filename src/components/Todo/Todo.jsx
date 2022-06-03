import React from 'react'

const Todo = ({todo}) => {

  let decoration = todo.completed ? '' : 'line-through'

  let background = todo.completed ? 
    'w-3/4 mx-auto shadow mt-4 px-4 py-4 rounded border border-green-300 bg-green-400' 
    : 'w-3/4 mx-auto shadow mt-4 px-4 py-4 rounded border border-red-300 bg-red-400'
  
  return(
    <div className={background}>
      <h1 className='font-bold text-center mb-2'>
        <p className={decoration}>
          {`${todo.title}`}
        </p>
      </h1>

      <div className='flex mt-2'>
        <button className='bg-yellow-600 hover:bg-yellow-700 p-1 rounded grow'>edit todo</button>
        <button className='bg-green-600 hover:bg-green-700 p-1 rounded grow'>{todo.completed ? 'Complete' : 'Re-do todo'}</button>
      </div>
    </div>
  )
}

export default Todo