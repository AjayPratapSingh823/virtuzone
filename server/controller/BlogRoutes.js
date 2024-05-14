const express = require('express');
const app = express();
const multer = require('multer');
const path = require('path');
const BlogContentSchema = require('../model/BlogContent');

//Multer storage configuration
const storage= multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,'uploads/')//save files to the 'uploads ' directory
    },
    filename:function(req,file,cb){
        cb(null,Date.now()+path.extname(file.originalname))// Generate unique filename
    }
})

const upload= multer({storage:storage});
const BlogPost =async (req, res) => {
    const { title,date, category,content } = req.body;
    const coverImage=req.file? req.file.path : '';
    try {
        const newBlog = new BlogContentSchema({
            title: title,
            date:date,
            category:category,
            content: content,
            coverImage: coverImage,
        });
        await newBlog.save();
        res.status(200).json({ message: 'Blog post successfully saved' });
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Error saving blog post' });
    }
}
const BlogGet=async(req,res)=>{
    try{
    const allBlogs=await BlogContentSchema.find({});
    res.status(200).json({allBlogs});
    }catch (error) {
        console.error('Error fetching form data:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

const BlogContent=async(req,res)=>{
      const {id}=req.params;
      try{
      const blogContent=await BlogContentSchema.findById(id);
      res.status(200).json({blogContent});
      }catch(err){
        res.status(500).json({err: err.message});
      }
}
const BlogCategoryContent=async(req,res)=>{
    const {category}=req.params;
    console.log(category);
    try{
        const blog=await BlogContentSchema.find({category});
        res.status(200).json({blog});
    }catch(err){
        res.status(500).json({err: err.message});
        console.log(err);
    }
}
module.exports = {
    BlogPost,
    BlogGet,
    upload,
    BlogContent,
    BlogCategoryContent
}
