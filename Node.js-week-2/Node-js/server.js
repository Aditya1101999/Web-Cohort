const express=require("express")
const bodyParser=require("body-parser")
const app=express()

const port=3000

app.use(bodyParser.json())

app.get('/',(req,res)=>{
    console.log(req.body)
    res.send('Hello World!')
})

app.listen(port)
// app.listen(port,function(){
//     console.log("Listening on post"+port)
// })

