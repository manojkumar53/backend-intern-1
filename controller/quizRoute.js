const express = require("express");
const quizSchema = require("../model/quizSchema");
const quizRoute = express.Router();
const mongoose = require("mongoose");
quizRoute.post("/create-quiz",(req,res)=>{
  quizSchema.create(req.body,(err,data)=>{
    if(err)
     return err;
    else
     res.json(data);
  })
})
quizRoute.get("/",(req,res)=>{
    quizSchema.find((err,data)=>{
        if(err)
          return err;
        else
          res.json(data);
    })
})
quizRoute.route("/update-quiz/:id")
.get((req,res)=>{quizSchema.findById(mongoose.Types.ObjectId(req.params.id),(err,data)=>
{
console.log("Inside update quiz");
console.log(req.body);
if(err)
{
console.log(err)
return err;
}
else
{
  console.log("successfully sent");
  console.log(data);
res.json(data);
}
})
}).put((req,res)=>{
  console.log("Inside update quiz mongodb");
  console.log(req.body);
quizSchema.findByIdAndUpdate(mongoose.Types.ObjectId(req.params.id)
,
{$set: req.body},
(err,data)=>{
if(err){
console.log(err);
return err;
}
else{
  console.log("successfully edited");
  console.log(data);
res.json(data);

}
})
})
quizRoute.delete("/delete-quiz/:id",(req,res)=>{
quizSchema.findByIdAndRemove(mongoose.Types.ObjectId(req.params.id)
,
(err,data)=>{
if(err)
return err;
else
res.json(data);
})
})
module.exports=quizRoute;