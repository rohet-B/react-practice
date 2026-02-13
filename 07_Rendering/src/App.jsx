import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [showBTN,setShowBTN] = useState(false)

  const [todo,setTodos] = useState([
     {
      task:"Practice react",
      desc:"For better understanding"
    },
    {
      task:"Make STR and Minor Report",
      desc:"Complete college task"
    },
    {
      task:"College Studies",
      desc:"For score better marks"
    }
  ])

  // Arrow functions in 2 ways:

    // Use { } when you have multiple lines of logic.
    // And When using { } → You must use return.
    
  //   const Todo = ({todo})=>{
  //     return(
  //       <>
  //       <h3>{todo.task}</h3>
  //       <p>{todo.desc}</p>
  //     </>
  //   )
  // }

  
  // Use ( ) when directly returning JSX.
  // And when using ( ) -> It automatically returns (implicit return).

  const Todo = ({todo})=>(
      <>
        <h3>{todo.task}</h3>
        <p>{todo.desc}</p>
      </>
    )
  
  return (
    <>
      <h3>Conditional Rendering</h3>
      <p> Showing button on the basis of condition</p>
      <p>When value of showBTN is {showBTN.toString()}</p>

      {/* Way 1 to write conditions */}
      {showBTN?<button onClick={()=>setCount(count+1)}>Count is {count}</button>:<button onClick={()=>{setShowBTN(prev => !prev)}}>Click me to show you</button>}
        <br/><br/>
        
      {/* Way 2 to write conditions -> if showBTN is true then show this button */}
      {showBTN && <button onClick={()=>{setShowBTN(prev => !prev)}}>Press me to hide again</button>}

      <hr />

      <h2>Rendering Lists</h2>

      {todo.map((todo,index)=>{
        return <Todo key={index} todo={todo}/>
      })}
    </>
  )
}

export default App
