const express = require('express');
const app = express();
const router=express.Router();
const BlogController= require('../controller/BlogRoutes')
const verifytoken= require('../middleware/verifytoken');


router.post('/blog-submit',BlogController.upload.single('coverImage'),verifytoken,BlogController.BlogPost);
router.get('/blog-get',BlogController.BlogGet);
router.get('/:id',BlogController.BlogContent)
router.get('/category/:category',BlogController.BlogCategoryContent)

module.exports=router;