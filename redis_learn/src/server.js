import express from "express" ; 
import axios from "axios" ;
import client from  "./client.js" ; 
const app = express() ; 

app.get("/", async (req,res)=> { 
    const cacheValue = await client.get('todos');
    if(cacheValue) {
        return res.json(JSON.parse(cacheValue));
    }
    const {data}= await  axios.get("https://jsonplaceholder.typicode.com/todos")
    await client.set("todos",JSON.stringify(data)) ;
    await client.expire("todos", 30);
    return res.json(data) ;
})
app.listen(9000)



//first req -- direct req, and no cache store and redis now stores seond req -- very fast 100 times faster through caching

//speed comparision in postman 
// -- direct hit -> 400+ ms 
// caching period hit ---> less than 10 ms
