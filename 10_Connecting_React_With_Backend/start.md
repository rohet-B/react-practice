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
9. To send data from localhost 3000 to 5173 we can use solutions that allow Cross Origin resouce sharing to do this we have 2 ways:
    1. CORS package.
        - CORS is a backend rule that allows or blocks requests coming from another website or port.

        - CORS stands for Cross-Origin Resource Sharing.
        - The cors package is a middleware in Express that allows your backend to accept & send requests & responses from & to other origins respectively.
        - In `backend` folder run this command:
            - `npm i cors`
    2. Proxy
        - A proxy is a middleman server that takes requests from the frontend and sends them to the backend, so the frontend doesn’t talk directly to the backend.It makes the requests look like they are coming from the same place or origin.

        - When we use a proxy, we do not write the full backend URL like http://localhost:3000/api in the frontend. Instead, we use a standardized API or URL path such as /api/.... This is done because the backend URL can be different in different environments. During development, the proxy automatically forwards /api requests to localhost:3000, and in production, the same /api path works with the real server domain. By doing this, we avoid hardcoding localhost in the frontend, which makes the code cleaner, flexible, and easier to deploy. In simple words, proxy helps us standardize the API path so the same frontend code works in both development and real-world production.
        - URL or API Standardization Means:
            - Designing API endpoints in a clear, consistent, and predictable format so that they are easy to understand and maintain.

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
                ```js
                //App.jsx
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
                },[])

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
                    </>
                )
                }

                export default App

                ```
            - Now go to frontend and open `vite.config.js` file & do `server configuration`:
                ```js
                import { defineConfig } from 'vite'
                import react from '@vitejs/plugin-react'

                // https://vite.dev/config/
                export default defineConfig({
                server:{
                    proxy:{
                    '/api':'http://localhost:3000',
                    },
                },
                plugins: [react()],
                })
                ```
10. And we are done, Now we can send data from backend to frontend.

11. But what if we need vice & versa sending from frontend to backend.
    - Create a POST Route in backend to accept transferred data
    ```js
    //server.js file
    // Getting data from frontend
    app.post("/api/jokes",(req,res)=>{
        const data = req.body; 
        console.log(data);

        res.send({
            message:"Data Received Successfully.",
        })
    });
    ```
12. When we send data from the frontend to the backend using Axios, the data is sent in JSON format. However, Express does not understand or read JSON data by default. Because of this, req.body remains empty or undefined, and the backend cannot access the sent data. To fix this, we must use the express.json() middleware before defining any routes. This middleware parses the incoming JSON request body and converts it into a JavaScript object, allowing us to read the data using req.body. Once this middleware is enabled, the backend can successfully receive, process, and respond to the data sent from the frontend.
13. Updated `server.js` file:
    ```js
    import express from 'express';
    const app = express();
    const port = 3000;

    app.use(express.json());

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

    // Getting data from frontend
    app.post("/api/jokes",(req,res)=>{
        const data = req.body; 
        console.log(data);

        res.send({
            message:"Data Received Successfully.",
        })
    });

    app.listen(port,()=>{
        console.log(`Server is running at ${port}.`);
    })

    ```

14. Now send data from frontend:
    ```js
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

    ```

## Conclusion
### Sending Data Using Proxy or CORS
- In this article we saw how to connect backend & frontend using proxy & axios.

- `Axios` is an external JavaScript library used to send & recieve HTTP requests & responses, which needs to be installed separately. When data is send in JSON format, Axios automatically converts that JSON response into a usable JavaScript object, has better error handling and provides a cleaner syntax, which is why it is commonly used in React applications.
- On the other hand, `Fetch` is a built-in browser API (provided by the browser) that is used to send HTTP requests and receive responses from a server. It does not require any installation and works directly in the browser, but it returns the response in raw format, so the data must be manually converted into JSON using `response.json()`. Fetch also requires extra handling for errors, which makes the code slightly longer compared to Axios.

- Another way to connect frontend and backend is using `CORS`. 
- When we use a proxy, the frontend sends data to a standardized API path like `/api/....` The proxy then forwards this request to the backend server, making the browser think the request came from the same origin, so no CORS check is triggered.
- But When we use CORS, the frontend talks directly to the backend using the full backend URL like `http://localhost:3000/api/...`. The backend then sends special permission headers to the browser. These headers tell the browser, “It’s okay, this request is allowed.” After that, the browser lets the request and response go through successfully. 
See the Example:
    ```js
    //Server.js file
    import express from "express";
    import cors from "cors";
    import bodyParser from "body-parser";

    const app = express();
    const port = 3000;

    app.use(cors());
    app.use(bodyParser.json()); //It tells server Hey, any incoming request with a JSON body, please parse it and convert it into a JavaScript object, so I can access it via req.body.

    app.get("/",(req,res)=>{
        res.send("Hello World");
    });
    app.post("/",(req,res)=>{
        console.log(req.body);
        res.send("Data Send.");
    });

    app.listen(port,() =>{
        console.log(`App is listening to port ${port}`);
    })
    ```
    ```js
    // App.jsx
    import { useState } from "react";
    import axios from "axios";

    function App() {
    const [name, setName] = useState("");

    const sendName = () => {
        axios.post("http://localhost:3000/", {
        name: name
        })
        .then((response) => {
        console.log(response.data);
        alert("Name sent successfully");
        })
        .catch((error) => {
        console.log(error);
        });
    };

    return (
        <div style={{ padding: "20px" }}>
        <h2>Send Name to Backend</h2>

        <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
        />

        <br /><br />

        <button onClick={sendName}>Send</button>
        </div>
    );
    }

    export default App;
    ```

`In Short:` The connection between the frontend and backend depends on whether you are using proxy or CORS, because both proxy and CORS decide whether the browser will allow the request or block it. However, in both cases, you can use `Axios` or `Fetch` to send and receive HTTP requests. Axios and Fetch are not used to create the connection, they are used to send requests and handle responses. When the backend sends data in JSON format, `Axios` automatically converts JSON into a JavaScript object, while Fetch requires manual conversion using `response.json()`.

*`THE END : )`*