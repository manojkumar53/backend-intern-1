

const mongoose = require("mongoose");
const quizSchema = new mongoose.Schema({
"question": {type:String},
"option1":{type:String},
"option2": {type:String},
"option3": {type:String},
"option4": {type:String},
},{
collection: "quiz"
})
module.exports = mongoose.model("quizSchema",quizSchema);