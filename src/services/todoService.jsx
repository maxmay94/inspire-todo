
const BASE_URL = `https://jsonplaceholder.typicode.com/`

const getAllTodos = async() => {
  try {
    const res = await fetch(`${BASE_URL}todos`)
    const data = await res.json()
    return data
  } catch(err) {
    throw err
  }
}

export {
  getAllTodos
}