const router=require('express').Router();

router.get('/',(req,res)=>{
    res.render('index');
});

router.get('/serviceproviders',(req,res)=>{
    res.render('hire')
})
router.get('/furOne',(req,res)=>{
    res.render('livingroom')
})
router.get('/furTwo',(req,res)=>{
    res.render('DiningRoom')
})
router.get('/furThree',(req,res)=>{
    res.render('OfficeFurniture')
})
router.get('/furFour',(req,res)=>{
    res.render('kitchen')
})
router.get('/furFive',(req,res)=>{
    res.render('MoreFurniture')
})
router.get('/signUp',(req,res)=>{
    res.render('signUp')
})

router.get('/signIn',(req,res)=>{
    res.render('Signin')
})
router.get('/hireStatus',(req,res)=>{
    res.render('hire')
})
router.get('/about',(req,res)=>{
    res.render('about')
})

router.get('/process',(req,res)=>{
    res.render('process');
})
router.get('/newUi',(req,res)=>{
    res.render('newUi');
})
router.get('/card',(req,res)=>{
    res.render('card');
})


module.exports=router;


