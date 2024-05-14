const express=require('express');
const app=express();
const PORT=3001;
const path=require('path');
const cors=require('cors');
app.use(express.json());
app.use(cors());
const adminRoutes=require('./routes/adminRoutes')
const  formRoutes =require('./routes/formRoutes');
const BlogRoutes=require('./routes/BlogRoutes');
const connection=require('./db');

connection();

app.use('/admin',adminRoutes);
app.use('/form',formRoutes);
app.use('/blog',BlogRoutes);
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.listen(PORT,()=>{
    console.log(`Server is listening on ${PORT}`);
})