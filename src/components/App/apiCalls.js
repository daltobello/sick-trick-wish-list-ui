function getAllTricks() {
  return fetch("http://localhost:3001/api/v1/tricks")
  .then(response => {
    if(response.ok) {
      return response
    } else {
      throw new Error(`${response.status} ${response.statusText}.`)
    }
  })
  .then(response => response.json())
}

export default getAllTricks