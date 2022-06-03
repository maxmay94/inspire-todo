import React from 'react'

const Todo = ({todo}) => {

  let decoration = todo.completed ? '' : 'line-through'
  
  return(
    <div className='w-3/4 mx-auto shadow mt-4 px-4 py-4 rounded border border-gray-300'>
      <h1 className='font-bold text-center mb-2'><p className={decoration}>{`${todo.title}`}</p></h1>
      <div className='flex mt-2'>
        <button className='bg-yellow-400 hover:bg-yellow-600 p-1 rounded grow'>edit todo</button>
        <button className='bg-green-400 hover:bg-green-600 p-1 rounded grow'>complete todo</button>
      </div>
    </div>
  )
}

export default Todo