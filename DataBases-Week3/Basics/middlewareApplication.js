const express=require("express")

const app =express()

app.use(express.json())
app.get("/ride1",(req,res)=>{
    res.json({
        msg:"riden ride 1"
    })
})

app.get("/ride2",(req,res)=>{
    res.json({
        msg:"riden ride 2"
    })
})


app.listen(3000)