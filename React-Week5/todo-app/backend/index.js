const express=require("express")
const {createTodo,updateTodo} =require("./types")
const {todo} =require("./db")
const app=express()

app.use(express.json())

app.post("/todo",async (req,res)=>{
    const createPayload=req.body
    const parsedPayload=createTodo.safeParse(createPayload)
    if(!parsedPayload.success){
        return res.status(411).json({msg:"Invalid Input"})
    }
    await todo.create({
        title:createPayload.title,
        description:createPayload.description,
        completed:false
    })
    res.json({
        msg:"Created Todo Successfully"
    })
})
app.get("/todos",async (req,res)=>{
    const todos=await todo.find({})
    res.json({
        todos
    })
})

app.put("/completed",async (req,res)=>{
    const createPayload=req.body
    const parsedPayload=updateTodo.safeParse(createPayload)
    if(!parsedPayload.success){
        return res.status(411).json({msg:"Invalid Input"})
    }
    await todo.update({
        _id:createPayload.id
    },{
        completed:true
    })
    res.json({
        msg:"Todo Completed"
    })
})


app.listen(3000)