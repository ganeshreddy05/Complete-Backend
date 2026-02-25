
import express from 'express'
import cors from "cors";

const app = express();
const PORT = 4000

app.get("/", (req, res) => {
  res.send("hello world");
});
app.use(cors(
    {
        origin : "http://localhost:5173",
        credentials : true
    }
));
app.get("/api/jokes",(req,res)=>{
    const jokes = [
        {
            id : "1",
            Title : "ganesh reddy is a bad guy"

        },
        {
            id : "2",
            Title : "ganesh reddy is a good guy"

        },
        {
            id : "3",
            Title : "hello excuse me"

        }
    ]
    res.send(jokes)
})

app.listen(PORT, () => {
  console.log('Server is running');
});
