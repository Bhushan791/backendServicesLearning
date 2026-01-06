import mongoose, { mongo } from "mongoose"; 
const DbConnection = async () => { 
    const connstr = "mongodb://localhost:27017/tesdb"; 
    try { 
   const result  =  await  mongoose.connect(connstr);
   if(result) { 
    console.log("done connected")
   }
    }
    catch (error) {
        console.log("error :",  error) ; 
    }  
}
export default DbConnection;