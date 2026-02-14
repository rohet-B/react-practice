import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [jokes,setJokes] = useState([])

  useEffect(()=>{
    axios.get('http://localhost:3000/api/jokes')
    .then((response)=>{
      setJokes(response.data)
    })
    .catch((err)=>{
      console.log(err)
    })
  })

  return (
    <>
      <h1>Full Stack Jokes</h1>
      <h2>Jokes: {jokes.length}</h2>
      {
        jokes.map((joke,index)=>{
          <div key={joke.id}>
            <h3>{joke.title}</h3>
            <p>{joke.content}</p>
          </div>
        })
      }
    </>
  )
}

export default App
