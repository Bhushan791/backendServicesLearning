import { response } from "express";
import { Blog } from "../models/blogs.models.js"; 


const CreateBlog  =  async (req,res) => { 
    console.log("ballle balle...........................................")
    const  {blogTitle, blogBody} = req.body || {};  
    if(!blogBody || !blogTitle) { 
        return res.status(400).json({success:false, message : "body or title is requried"})       
    }
    const blog =  await Blog.create(req.body) ; 
    return res.status(201).json({success:true , message: "blog created successfully!"})
}



const getAllBlogs = async (req, res) => { 

    const blogs = await Blog.find() ; 
    return res.status(200).json({success: true, message: "blogs fetched successfully", blogs})


}

const updateBlog = async (req, res) => {
  const { _id, blogTitle, blogBody } = req.body;
  if (!blogTitle || !blogBody) return res.status(400).json({ success: false, message: "Provide title & body" });

  const blog = await Blog.findByIdAndUpdate(_id, { blogTitle, blogBody }, { new: true });
  if (!blog) return res.status(404).json({ success: false, message: "Blog not found" });

  res.json({ success: true, message: "Blog updated", blog });
};

  

const deleteBlog =  async (req, res) => { 



    const id = req.body._id ; 


    const blog = await Blog.findById(id) ;  
if(!blog) { 
    return res.status(400).json({success:false, "message" : "blog not found!"});


}


await Blog.findByIdAndDelete(id) ; 
    return res.status(201).json({success:true, "message" : "deleted"});


}


export  {CreateBlog, getAllBlogs, updateBlog, deleteBlog}; 