const express=require("express")
const mongoose=require("mongoose")
const cors=require("cors")
const bodyParser = require("body-parser");
const registerModel=require("./model/registerSchema");
const quizRoute=require("./controller/quizRoute");
const app=express();
app.use(express.json());
app.use(cors())
// mongodb+srv://test:12345@cluster0.2ommxla.mongodb.net/languages
mongoose.set("strictQuery",true);
mongoose.connect("mongodb+srv://test:12345@cluster0.2ommxla.mongodb.net/languages");
var db=mongoose.connection;
db.on("open",()=>console.log("connected to DB"))
db.on("error",()=>console.log("Error Occurred"))
app.post("/login",(req,res)=>{
    const {email,password}=req.body;
    registerModel.findOne({email:email})
    .then(user=>{
        if(user){
            if(user.password===password){
                 res.json("success")
                // alert("success")

            }
            else{
                res.json("the password is incorrect")
            }
        }
        else{
            res.json("No record existing")
        }
    })
})
app.post('/register',(req,res)=>{
    registerModel.create(req.body)
    .then(languages=>res.json(languages))
    .catch(err=>res.json(err))
})
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());

app.use("/quizRoute",quizRoute);
app.listen(3001,()=>{
    console.log("server started at 3001")
})

