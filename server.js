import express from 'express'
import cors from 'cors'

import {config} from 'dotenv'
import { ami } from './asterisk.js';

config();

const app = express();
const port = process.env.PORT | 8088


app.use(express.json());
app.use(cors());


ami.connect(res => console.log("This is the res ami: ", res))


app.get("/", (req,res)=>{
    res.send('<h1>Welcome To Talk Your Mind!</h1>')
});



app.post('/auth',(req,res)=>{
    const {body} = req;

    let {username, password} = body;
    if(!username || !password){
        res.json({msg : "username or password required"});
        return;
    }

    if(username === "admin@edmundpbx.com" && password === "edmundLock"){
        res.json({msg : "Successful Login", data : { username : "Eddie"}});
        return;
    }else{
        res.json({msg : "Invalid Credentials"})
    }

    
})




app.listen(port,()=> console.log(`Server running on http://localhost:${port}`))
