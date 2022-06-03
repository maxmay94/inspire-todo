
const BASE_URL = `https://jsonplaceholder.typicode.com/`

export const getAllTodos = async() => {
  try {
    const res = await fetch(`${BASE_URL}todos`)
    const data = await res.json()
    return data
  } catch(err) {
    throw err
  }
}

export const deleteTodo = async(todoId) => {
  try{
    await fetch(`${BASE_URL}${todoId}`, {
      method: 'DELETE'
    })
  } catch(err) {
    throw err
  }
}