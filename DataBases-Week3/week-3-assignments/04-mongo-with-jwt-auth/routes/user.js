const jwt=require("jsonwebtoken")
const { User , Course  }=require("../db")
const {secret}=require("../config")
const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");

// User Routes
router.post('/signup', async (req, res) => {
    // Implement user signup logic
    const username=req.body.username
    const password=req.body.password
    await User.create({
        username,
        password
    })
    res.json({ message: 'User created successfully' })
});

router.post('/signin', async (req, res) => {
    // Implement admin signup logic
    const username=req.body.username
    const password=req.body.password
    const isValidated= await User.find({
        username,
        password
    })
    if(isValidated){
        const token=jwt.sign({username},secret)
        res.json({token})
    }
    else{
        res.status(411).json({msg:"wrong credentials"})
    }
});

router.get('/courses', async (req, res) => {
    // Implement listing all courses logic
    const response= await Course.find({})
    res.json({courses : response})
});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    // Implement course purchase logic
    const courseId=req.params.courseId
    const username=req.username//getting from the middleware

    await User.updateOne({
        username: username
    },
    {
        "$push":{
            purchasedCourses : courseId
        }
    })
    res.json({ message: 'Course purchased successfully' })
});

router.get('/purchasedCourses', userMiddleware, async(req, res) => {
    // Implement fetching purchased courses logic
    const user= await User.findOne({
        username:req.username
    })
    const courses=await Course.find({
        _id:{
            "$in":user.purchasedCourses
        }
    })
    res.json({courses})
});

module.exports = router