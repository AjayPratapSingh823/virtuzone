const mongoose= require('mongoose')
const connection=async()=>{
    try{
        await mongoose.connect('mongodb://localhost:27017/virtualzone',{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log('mongodb connected');
    }
    catch(err){
        console.log(err);
    }
}
module.exports=connection;