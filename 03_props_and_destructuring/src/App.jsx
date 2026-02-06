import { useState } from 'react'
import ParentComponent from './components/ParentComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* When the ParentComponent renders, 
      it will pass the name and age props to the ChildComponent, 
      which will display the data accordingly. */}
      <ParentComponent/>

      {/* OR You Can visit this website for understanding:
       https://thehumblecoder.medium.com/props-in-reactjs-a-comprehensive-guide-81d8cde44518
       */}

       
    </>
  )
}

export default App
