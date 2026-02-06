## About React.js
- React is a JavaScript library used to build user interfaces through small components.

- Different platforms need different renderers — that’s why React DOM and React Native library & framework also introduced.
- They both are the part of React Ecosystem.
- React DOM exists to render React components in the browser using HTML and DOM.
- React Native exists to render React components as native mobile UI for Android and iOS.
## Components in React.js
- Components are the building blocks of a React application.

- Each component represents a part of the UI (e.g., button, navbar, footer).
- Components can be reused across the application.
- They make code modular, readable, and easier to manage.
- Two main types of components:
    1. **Functional Components** – written as functions (most commonly used).
    2. **Class Components** – written as ES6 classes (older, less used now).

## Creating React Project
- React project can be made in 2 ways:
    1. `npx create-react-app project_name`
        - creating react project using webpack (installing without using third party tools like vite).
        - this command installs a bulky utility for react that's why takes time to install.
        - To run projects go and see package.json > scripts `npm run start`
    2. `npm create vite@latest` 
        - creating react project using a vite bundeler.
        - To run projects go and see package.json > scripts

## Why to use react ?
1. In React, state is like a box where we keep some data. If we change what’s inside the box, React will automatically update the page wherever that data is used. Therefore, using state is beneficial because it helps keep our app dynamic.

2. We can split our app into multiple components and reuse those components.
3. React uses a Virtual DOM to efficiently update the UI which is better than updating content using DOM Manipulation.
### Without React code how html and js works
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <div id="counter">0</div>
    <button id="btn">Click Me</button>
    <script>
        document.getElementById("btn").addEventListener('click',()=>{
            let num = parseInt(document.getElementById("counter").innerHTML)
            document.getElementById("counter").innerHTML = num +1;
        })
    </script>
</body>
</html>
```
### With React same above thing will work like this
```jsx
// counter.jsx file
import { useState } from "react"
export default function Counter(){
    const [value,setValue] = useState(0);
    let increase = () =>{
        setValue(value + 1)
    }
    return(
        <div>
            <h3>Counter</h3>
            <h2>{value}</h2>
            {/* <button onClick={increase}>Increase Value</button> */}
            // without function
            <button onClick={()=>{ setValue(value + 1)}}>Increase Value</button>
        </div>
    )
}
```
```jsx
// app.jsx file
import './App.css'
import Counter from './Coutner'

function App() {
  return (
   <Counter/>
  )
}

export default App
```

## When using React with Vite, JSX is used
- JSX stands for JavaScript Syntax Extension.

- It allows us to **write HTML inside JavaScript**.
- JSX makes code easier to read and write.
- Browsers don’t understand JSX directly → React compiles it into plain JavaScript.

## How to connect `tailwind css` in react
Follow this video link: [Tailwind CSS with React.](https://youtu.be/sHnG8tIYMB4?si=O26ezYldceecIvuq)

## Props or Properties in React
- It is used to pass data from one component to another.

- They make components dynamic and reusable.
- Props are immutable → once a value is passed to a component, it cannot be changed inside that component.
- Only the parent component can change the value and pass a new one.