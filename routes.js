const express=require("express");
const router=express.Router();
router.get("/home",(req,res)=>{
    res.send("<h1>Hello World Home</h1>");
})
router.get("/about",(req,res)=>{
    res.send("<h1>Hello World About</h1>");
})
router.get("/contact",(req,res)=>{
    res.send("<h1>Hello World Contact</h1>");
})
router.get("/service",(req,res)=>{
    res.send("<h1>Hello World Service</h1>");
})

router.get("/jsonExample",(req,res)=>{
    res.status(200).json({error:false,message:"Hello Example"});
})
router.get("/foodlist",(req,res)=>{
    res.status(200).json({error:false,data:["Food 1","Food 2","Food 3"]});
})
router.post("/signup",(req,res)=>{
    let username=req.body.username;
    let password=req.body.password;
    let email=req.body.email;
    console.log(username)
    console.log(password)
    console.log(email)
    res.status(200).json({error:false,message:"Hi "+username+" your Account Created"})
})
module.exports=router;