import express from "express" ;
import {CreateBlog, getAllBlogs,updateBlog, deleteBlog } from "../controllers/blogs.controller.js";
const router = express.Router() ; 


router.route ("/blogs").post(CreateBlog) ; 
router.route("/blogs").get(getAllBlogs) ; 
router.route("/blogs").put(updateBlog) ; 
router.route("/blogs").delete(deleteBlog) ; 
export default router ;  


