import express from 'express'
import cors from 'cors'

import {config} from 'dotenv'
import { cdrs, users } from './db.js';

config();

const app = express();
const port = process.env.PORT | 8088


app.use(express.json());
app.use(cors());




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


app.get('/users', (_,res)=>{
    res.status(200).json(users);
})


app.get("/cdrs", (_,res)=>{
    res.status(200).json(cdrs)
})




app.listen(port,'0.0.0.0',()=> console.log(`Server running on http://0.0.0.0:${port}`))
