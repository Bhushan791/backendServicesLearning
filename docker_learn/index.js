import express from "express" 

const app = express() 

const PORT = process.env.PORT || 8000






app.get('/', (req,res)=> {
  

    return res.json({message: "hi from node JS docker ! "})
})
// app.get('/', (req,res)=> {
//     res.send ( " hello is this availalein the home page!! ")
// })


app.listen(PORT, ()=> {
    console.log("srver running on localhost",PORT) ; 

}) ; 