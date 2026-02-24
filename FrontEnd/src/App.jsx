import { useState } from 'react'
import './App.css'
import axios from 'axios'
import { useEffect } from 'react'

function App() {
  const [jokes, setJokes] = useState([])

useEffect(()=>{
  axios.get('http://localhost:4000/api/jokes')
  .then((response)=>{
    setJokes(response.data)
  })
  .catch((error)=>{
    console.log(error)
  })
})
  return (
    <>
    <h1>chai and full Stack</h1>
    <p>jokes : {jokes.length}</p>
{
  jokes.map((joke,index)=>(
    <div key = {joke.id}>
      <h1>{joke.title}</h1>
    </div>
  ))
}
      </>
  )
}

export default App
