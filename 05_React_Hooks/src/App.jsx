import Array from "./components/01_useState/Array"
import UseEffectDemo from "./components/02_useEffect/UseEffectDemo"
import UseEffectDemo2 from "./components/03_useRef/UseEffectDemo2"
import UseEffectDemo_1 from "./components/03_useRef/UseEffectDemo_1"

function App() {

  return (
    <>
     <div className="p-4">
      <h2 className="text-3xl font-bold">useState</h2>

      <ul className="list-disc pl-5">
        <li>Lets you add and update state of variables, arrays (with spread operator) inside a function.</li>
        <li>useState causes re-render. Whenever state changes, re-rendering occurs.</li>
        <li>
          We can use useState in places where updating variables is required or
          after some action re-rendering is required.
        </li>
      </ul>

      <h3 className="font-bold mt-2">Example:</h3>
      <Array />
    </div>

    <hr />

    <div className="p-4">
      <h2 className="text-3xl font-bold">useEffect</h2>

      <ul className="list-disc pl-5">
        <li>Runs code automatically when component loads or updates.</li>
        <li>We can use useEffect when we want to fetch data when a component loads and when some state or something changes.</li>
      </ul>

      <h3 className="font-bold mt-2">Example:</h3>
    </div>
      {/* <UseEffectDemo/> */}

    <hr />
    
     <div className="p-4">
      <h2 className="text-3xl font-bold">useRef</h2>

      <ul className="list-disc pl-5">
        <li>It is used to store a value that does not reset when the component re-renders.</li>
        <li>It can also directly access DOM elements (like input, button, div).</li>
        <li>Whenever the value changes, useRef Does not causes re-render.</li>
        <li>It is basically used for storing previous value.</li>
      </ul>

      <h3 className="font-bold mt-2">Example 1 - Referencing a value with useRef</h3>
      <UseEffectDemo_1/>
      <h3 className="font-bold mt-2">Example 2 - DOM Manipulation using useRef</h3>
      <UseEffectDemo2/>
    </div>

    <hr/>

    
    </>
  )
}

export default App
