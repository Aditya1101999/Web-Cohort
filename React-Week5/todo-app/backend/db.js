const mongoose=require("mongoose")

const todoSchema=new mongoose.Schema({
    title:String,
    description:String,
    completed:Boolean
})

mongoose.connect("your-mongo-url")

const todo=mongoose.model('todos',todoSchema)

module.exports={
    todo
}