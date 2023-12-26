const express=require("express")
const app=express()

app.use(express.json())
//use the middleware function for any route after it
//(one use case it rate limiting)
//app.use(middleware)

//middleware to count no. of requests made
let requestCount=0
app.use((req,res,next)=>{
  console.log(`Request Made: ${++requestCount}`)
  next()
})

//average time your server is taking to handle requests

let totalTime=0
 app.use((req,res,next)=>{
  let startTime=new Date().getTime();

  res.on('finish',()=>{
    let endTime= new Date().getTime()
    let timeElapsed=endTime-startTime
   // console.log(timeElapsed)
    totalTime+=timeElapsed
    console.log('Avg time'+totalTime/requestCount)
  })
  next()
})


app.get("/health-checkup",(req,res)=>{
  console.log(req.body)
      res.json({
        msg: "Your kidney is fine!"
      })
    
      
    })


app.listen(3000)