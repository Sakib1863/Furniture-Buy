const mongoose=require('mongoose');

const Signup = new mongoose.Schema({
    name:{
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
        required:true,
        unique:true
    },
    RePassword:{
        type:String,
        required:true,
        unique:true
    },
    
    number:{
        type:String,
        required:true,
        unique:true
    },
    address:{
        type:String,
        required:true
    }
});

//collection

const ParentRegister= new mongoose.model('SignUp',Signup);

module.exports=ParentRegister;

