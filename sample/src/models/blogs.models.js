import mongoose  from "mongoose";

const BlogModel  =   new mongoose.Schema({



    blogTitle : {type : String , required:true} , 

    blogBody :  {type: String ,  required: true} , 

}, {timestamps:true}); 


export const Blog =  mongoose.model("Blog", BlogModel);