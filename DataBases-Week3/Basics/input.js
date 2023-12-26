const express=require("express")
const zod=require("zod")
const app=express()
const schema=zod.number().array()

function validateInput(obj){
    const schema1=zod.object({
        email:zod.string().email(),
        password:zod.string().min(8),//min length is 8
        country:zod.literal("IN").or(zod.literal("US")),
    })
    return schema1.safeParse(obj)
}

//if this is an array of strings with at least 1 input , return true

function validateInputArr(arr){
    const schemaStr=zod.string().array().nonempty()
    let res=schemaStr.safeParse(arr)
    return res.success
}
let arr=[]
console.log(validateInputArr(arr))

app.use(express.json())
app.post("/login",(req,res)=>{
    const response=validateInput(req.body)
    if(!response.success){
        res.json(
            {
                msg:"invalid"
            }
        )
        
    }
    else{
        res.json({
            msg: "valid",
            data: validationResult.data,
        })
    }
})


app.post("/health-checkup",(req,res)=>{
    console.log("Health Check Up Request Received!")
    //kidneys is an array of numbers
    const kidneys=req.body.kidneys
    const response=schema.safeParse(kidneys)
    if(!response.success){
        res.status(411).json({
            msg:"invalid input"
        })
    }
    else{
    res.send({
        response
    })
}
    // const length=kidneys.length

    // res.send(length)
})

//global catches
app.use(function(err,req,res,next){
    res.json({
        msg: "error occured"
    })
})

app.listen(3000)