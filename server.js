const express=require('express');
const app=express();
const { appendFile } = require('fs');
const path=require('path');
const PORT= process.env.PORT||3000;
const mainRouter=require('./router/index');
require('./Database/connection/conn');
const userSignUP= require('./Database/models/SignUP');
const bcrypt = require("bcryptjs");



//ejs set
app.set('view engine','ejs');
// Css,image,js set
app.use(express.static('public'));
app.use('/css',express.static(__dirname+'public/css'));
app.use('/image',express.static(__dirname+'public/image'));
app.use('/js',express.static(__dirname+'public/js'));

// Database

app.use(express.json());
app.use(express.urlencoded({extended:false}));


app.post('/signUp',async(req,res)=>{
    try{
        const password=req.body.password;
        const RePassword=req.body.RePassword;
        const hasedPassword = await bcrypt.hash(password, 10);
        if(password===RePassword ){
            const UserSignUp= new  userSignUP({
                name:req.body.name,
                email:req.body.email,
                password:hasedPassword,
                RePassword:hasedPassword,
                number:req.body.number,
                address:req.body.address,
                
            })

            const registered= UserSignUp.save();
            
           
            res.status(201).render('SignIn');
           
           
              
          }
          else{
              res.send(`<h1>Correct your password and Re password</h1>`);
          }
       

    }catch(err)
    {
        res.redirect('index');
    }
 
});




app.post('/signIn',async(req,res)=>{
    try{
    const email=req.body.email;
    const password=req.body.password;
    
    const userEmail= await userSignUP.findOne({email:email});
    const checkpassword = await bcrypt.compare(password, userEmail.password);
    if(!checkpassword){

        res.send("Incorrect Email and Password")
       
        
    }
    else{
        res.redirect('newUi')
      
          
    }
}catch(error){
   
    res.send("Incorrect Email and Password")
}

});


app.use(mainRouter);

app.listen(PORT,()=>{
    console.log(`server listening on Port ${PORT}`);
})