import React from 'react'


const AddTodoForm = (props) => {
  return(
    <div>
      <form action="">
        <div>
          <label>Enter Todo Item</label>
          <input
            required
            name='todoItem'
            autoComplete='off'
            placeholder='What do you need to do?'  
          />
        </div>
      </form>
    </div>
  )
}

export default AddTodoForm