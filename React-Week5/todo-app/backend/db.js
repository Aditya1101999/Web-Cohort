const mongoose=require("mongoose")

const todoSchema=new mongoose.Schema({
    title:String,
    description:String,
    completed:Boolean
})

mongoose.connect("mongodb+srv://Aditya:Y9NUuGGxO8aKjFIU@cluster0.lrn4k57.mongodb.net/")

const todo=mongoose.model('todos',todoSchema)

module.exports={
    todo
}