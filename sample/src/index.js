import express, {json } from "express" ; 

import DbConnection from "./db/connection.js";
import BlogRouter from "./routes/blogroutes.js";

const app = express() ;
const port = 8080;

DbConnection();




app.use(express.json())

app.use("/api/v1" ,  BlogRouter)

app.listen(port, (error)=>{

    if(!error) { 
        console.log("app is running successfully in port", port) ; 

    }
    else { 

        console.log("ERROR ERROR") ;
    }
}) 
 

