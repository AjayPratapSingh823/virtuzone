const mongoose=require('mongoose');
const BlogContent = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    coverImage: {
        type: String,
        required: true
    },
    images: [{
        type: String,
        required:false // Array of strings to store URLs/paths to images
    }]
});
const BlogContentSchema= new mongoose.model("blogcontents",BlogContent);
module.exports=BlogContentSchema