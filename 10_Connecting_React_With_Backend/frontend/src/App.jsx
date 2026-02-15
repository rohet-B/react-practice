import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [jokes,setJokes] = useState([])

  useEffect(()=>{
    axios.get('/api/jokes')
    .then((response)=>{
      setJokes(response.data)
    })
    .catch((err)=>{
      console.log(err)
    })
  })

  const sendData = () => {
    axios.post("/api/jokes", {
      title: "Frontend Joke",
      content: "This joke is sent from frontend"
    })
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
  };

  return (
    <>
      <h1>Full Stack Jokes</h1>
      <h2>Jokes: {jokes.length}</h2>
      {
        jokes.map((joke,index)=>{
          return(<div key={joke.id}>
            <h3>{joke.title}</h3>
            <p>{joke.content}</p>
          </div>)
        })
      }
      <button onClick={sendData}>Send Data</button>
    </>
  )
}

export default App
