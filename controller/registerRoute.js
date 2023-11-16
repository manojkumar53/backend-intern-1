const express=require("express");
const registerRoute=express.Router();
const registerSchema=require("../model/registerSchema");

registerRoute.post("/register",(req,res)=>{
    registerSchema.create(req.body,(err,data)=>{
        if(err)
          return err;
        else
         res.json(data);
    })
})
// registerRoute.get("/",(req,res)=>{
//     registerSchema.find((err,data)=>{
//         if(err)
//          return err;
//         else
//          res.json(data);
//     })
// })

module.exports=registerRoute;