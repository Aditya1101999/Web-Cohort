const express = require('express')
const userRouter=express.Router()
const zod=require('zod')
const jwt=require("jsonwebtoken")
const {JWT_SECRET}=require("../config")
const {User, Account}=require("../db")
const {authMiddleware}=require("../middleware")

const signupSchema=zod.object({
    username:zod.string().email(),
    password:zod.string(),
    firstname:zod.string(),
    lastname:zod.string()
})

const signinSchema=zod.object({
    username:zod.string().email(),
    password:zod.string()
})

userRouter.post("/signup",async (req,res)=>{
    const body=req.body
    const {success}=signupSchema.safeParse(body)
    if(!success){
        return res.status(400).json({message:"Invalid request"})
    }
    const user=User.findOne({
        username:body.username
    })
    if(user._id){
        return res.status(409).json({message:"Username already exists."})
    }
    const dbUser=await User.create(body)
    await Account.create({
        userId,
        balance:1+Math.random()*10000
    })
    const userId=dbUser._id
    const token=jwt.sign({
        userId
    },JWT_SECRET)
    
    res.json({
        message:"Signed up.",
        token : token
    })
})

userRouter.post("/signin",async (req,res)=>{
    const body=req.body
    const {success}=signinSchema.safeParse(body)
    if(!success){
        return res.status(400).json({message:"Invalid request"})
    }
    const user=await User.findOne({
        username:body.username,
        password:body.password
    })
    if(user){
        const userId=user._id
        const token=jwt.sign({
            userId
        },JWT_SECRET)
        res.json({
            message:"Signed In.",
            token : token
        })
    }
    res.status(411).json({
        message: "Error while logging in"
    })
})

const updateBody=zod.object=({
    password:zod.string().optional(),
    firstname:zod.string().optional(),
    lastname:zod.string().optional()
})

userRouter.put("/",authMiddleware, async (req,res)=>{
    const body=req.body
    const {success}=updateBody.safeParse(body)
    if(!success){
        return res.status(411).json({message:"Error"})
    }
    await User.updateOne(
        req.body,{
            id:req.userId
        }
    )
    res.json({message:"updated"})
})

userRouter.get("/bulk",async(req,res)=>{
    const filter=req.query.filter || ""

    const users=await User.find({
        $or:[
            {firstname :{"$regex" : filter}},
            {lastname :{"$regex": filter}}
        ]
    })
    res.json({
        user:users.map(user=>({
            username:user.username,
            firstname:user.firstname,
            lastname:user.lastname,
            _id:user._id
        }))
    })
})

module.exports(userRouter)