## Connecting Frontend to Backend
1. Create `backend` & `frontend` folder.

2. Inside `backend` folder run this command: 
    - `npm init`
    - `npm i express`
3. Create `server.js` file and use express package using `import` keyword like this:
    ```js
    import express from 'express';
    const app = express();
    const port = 3000;

    app.get('/',(req,res)=>{
        res.send("Server is ready.");
    });

    app.listen(port,()=>{
        console.log(`Server is running at ${port}.`);
    })
    ```
4. Along with 3rd step also add this `"type":"module",` in `package.json` file.
5. Now create a route where you sends list of data:
    ```js
    import express from 'express';
    const app = express();
    const port = 3000;

    app.get('/',(req,res)=>{
        res.send("Server is ready.");
    });


    // get a list of 5 jokes
    app.get("/jokes",(req,res)=>{
        const jokes = [
            {
                id:1,
                title: 'A joke',
                content: "This is a joke 1"
            },
            {
                id:2,
                title: 'Another joke',
                content: "This is a joke 2"
            },
            {
                id:3,
                title: 'A third joke',
                content: "This is a joke 3"
            },
            {
                id:4,
                title: 'A fourth joke',
                content: "This is a joke 4"
            },
            {
                id:5,
                title: 'A fifth joke',
                content: "This is a joke 5"
            },
        ]
        res.send(jokes);
    })

    app.listen(port,()=>{
        console.log(`Server is running at ${port}.`);
    })
    ```

6. Now, Inside `Frontend` folder we will write this component to show our jokes data:
    ```js
    import { useState } from 'react'
    import './App.css'

    function App() {
    const [jokes,setJokes] = useState([])

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

    ```

7. Inside `Frontend` folder run this commands:
    - `npm i axios`

8. Now use axios in the frontend component and make a call to api:
    ```js
    import { useEffect, useState } from 'react'
    import axios from 'axios'
    import './App.css'

    function App() {
    const [jokes,setJokes] = useState([])

    useEffect(()=>{
        axios.get('http://localhost:3000/jokes')
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
    ```
9. To send data from localhost 3000 to 5173 we have to use CORS package.
    - CORS stands for Cross-Origin Resource Sharing.
    - The cors package is a middleware in Express that allows your backend to accept & send requests & responses from & to other origins respectively.
10. In `backend` folder run this command:
    - `npm i cors`
11. URL Standardization
    - URL standardization means designing API endpoints in a clear, consistent, and predictable format so that they are easy to understand and maintain.
    - In backend development, we usually Use `/api` prefix to separate API routes.
    - Old code with updation:
        ```js
        import express from 'express';
        const app = express();
        const port = 3000;

        app.get('/',(req,res)=>{
            res.send("Server is ready.");
        });


        // get a list of 5 jokes
        app.get("/api/jokes",(req,res)=>{
            const jokes = [
                {
                    id:1,
                    title: 'A joke',
                    content: "This is a joke 1"
                },
                {
                    id:2,
                    title: 'Another joke',
                    content: "This is a joke 2"
                },
                {
                    id:3,
                    title: 'A third joke',
                    content: "This is a joke 3"
                },
                {
                    id:4,
                    title: 'A fourth joke',
                    content: "This is a joke 4"
                },
                {
                    id:5,
                    title: 'A fifth joke',
                    content: "This is a joke 5"
                },
            ]
            res.send(jokes);
        })

        app.listen(port,()=>{
            console.log(`Server is running at ${port}.`);
        })
        ```
