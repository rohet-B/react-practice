import Array from "./components/01_useState/Array"
import UseEffectDemo from "./components/02_useEffect/UseEffectDemo"
import UseEffectDemo2 from "./components/03_useRef/UseEffectDemo2"
import UseEffectDemo_1 from "./components/03_useRef/UseEffectDemo_1"
import With_Context_Parent from "./components/04_useContext/With_Context/With_Context_Parent"
import Parent from "./components/04_useContext/Without_Context/Parent"

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

 <div className="p-4">
      <h2 className="text-3xl font-bold">useContext</h2>

      <ul className="list-disc pl-5">
        <li>
          It lets you share data between components without passing props manually at every level.
        </li>
        <li>
          Normally, if you have a value (like a user's name or a theme) in a parent component, and you need it in a deeply nested child, you'd have to pass it down through props drilling which is messy. That's why React gives us createContext + useContext.
        </li>
        <li>
          It is basically used for theme switching (dark/light mode), Authentication / user login or not. 
        </li>
        <li>
          Steps to work with useContext: 
        </li>
        <li>
          Step 1. Creating the context
          - createContext method is used, <span className="font-bold">const userContext=createContext()</span>
        </li>
        <li>Step 2. Providing the context
          - Provider method is used & remember that it is used inside return() method, <span className="font-bold">return (&lt;userContext.Provider value="xyz"&gt;&lt;Child/&gt;&lt;/userContext.Provider&gt;);</span>
        </li>
        <li>Step 3. Consuming or using the Context inside child Component
          - useContext method is used & if context file is made in context folder we have to import that context file also, <span className="font-bold">const user = useContext(userContext)</span>
        </li>
      </ul>

      <h3 className="font-bold mt-2">Example 1. Props drilling or (Without_context):</h3>
      <Parent/>
      <h3 className="font-bold mt-2">Example 2. With context:</h3>
      <With_Context_Parent/>
    </div>

    <hr/>
    
    
    </>
  )
}

export default App
