const express=require("express")

const app =express()

app.use(express.json())

function middleware(req,res,next){
    console.log(`Request made to ${req.url}`)
    next()
}
//only triggers for the route handlers below this
app.use((req,res,next)=>{
    const age=req.query.age
    if(age>=14) next()
    else res.json({msg : "go home kiddo"})
})
app.get("/ride1", middleware, (req,res)=>{
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