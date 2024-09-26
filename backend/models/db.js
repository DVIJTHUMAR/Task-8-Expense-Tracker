const mongoose=require('mongoose');
require('dotenv').config();


const MONGO_URL=process.env.MONGO_URL


mongoose.connect(MONGO_URL).then(()=>{
    console.log("Connected to MongoDB")
}).catch((err)=>{
    console.log("Error connecting to MongoDB",err)
})