const mongoose=require('mongoose');

mongoose.connect('mongodb://localhost:27017/Furnitures',{
    useNewUrlParser:true,
    useUniFiedTopology:true
}).then(()=>{
    console.log("Connect");
}).catch((e)=>{
    console.log("Error");
})