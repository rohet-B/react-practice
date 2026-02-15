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