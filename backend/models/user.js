const mongoose=require('mongoose');
const Schema=mongoose.Schema

const UserSchema = new Schema ({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    role: { type: String, enum: ['user', 'admin'], default: 'user' }
})

const Usermodel=mongoose.model('users',UserSchema);

module.exports=Usermodel