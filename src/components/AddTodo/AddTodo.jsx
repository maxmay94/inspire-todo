import React from 'react'

const AddTodo = (props) => {

  // const[todo, setTodo] = useState('')

  const handleSubmit = async() => {
    try{
      console.log('AAAAHHHH')
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
            value={props.title}
            placeholder='What do you need to do?'
            onChange={(e) => props.addTodo(e.target.value)}  
          />
        </div>
      </form>
      <button 
        className="bg-green-500 hover:bg-green-600 p-1 rounded"
        onClick={() => handleSubmit()}
      >
        Add Todo
      </button>

    </div>
  )
}

export default AddTodo