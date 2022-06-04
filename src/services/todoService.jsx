
const BASE_URL = `https://jsonplaceholder.typicode.com/todos/`

export const getAllTodos = async() => {
  try {
    const res = await fetch(`${BASE_URL}`)
    const data = await res.json()
    return data
  } catch(err) {
    throw err
  }
}

export const addTodo = async() => {
  fetch(`${BASE_URL}`, {
  method: 'POST',
  body: JSON.stringify({
    title: 'foo',
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));
}

export const deleteTodo = async(todoId) => {
  console.log('DELETE SERVICE --> ' + todoId)
  try{
    await fetch(`${BASE_URL}${todoId}`, {
      method: 'DELETE'
    })
  } catch(err) {
    throw err 
  }
}

export const completeTodo = async(todoId, done) => {
  console.log('BEFORE complete -->', done)
  fetch(`${BASE_URL}${todoId}`, {
    method: 'PATCH',
    body: JSON.stringify({
      completed: !done,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
  .then((response) => response.json())
  .then((json) => console.log('Complete Todo --> ', json));
}


export const editTodo = async(todoId) => {
  fetch(`${BASE_URL}${todoId}`, {
    method: 'PATCH',
    body: JSON.stringify({
      title: 'foo',
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
  .then((response) => response.json())
  .then((json) => console.log('Edit Todo --> ',json));
}