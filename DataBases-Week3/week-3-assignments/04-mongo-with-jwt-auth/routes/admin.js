const { Router } = require("express");
const {Admin,Course}=require("../db")
const adminMiddleware = require("../middleware/admin");
const jwt=require("jsonwebtoken")
const {secret}=require("../config")
const router = Router();

// Admin Routes
router.post('/signup', async (req, res) => {
    // Implement admin signup logic
    const username=req.body.username
    const password=req.body.password
    await Admin.create({
        username,
        password
    })
    res.json({msg:"Admin Created"})
});

router.post('/signin', async (req, res) => {
    // Implement admin signup logic
    const username=req.body.username
    const password=req.body.password
    const isValidated= await Admin.find({
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

router.post('/courses', adminMiddleware, async (req, res) => {
    // Implement course creation logic
    const title=req.body.title
    const description=req.body.description
    const price=req.body.price
    const imageLink=req.body.imageLink

    const newCourse=await Course.create({
        title,
        description,
        price,
        imageLink
    })
    res.json({ message: 'Course created successfully', courseId: newCourse._id })
});

router.get('/courses', adminMiddleware, async (req, res) => {
    // Implement fetching all courses logic
    const response=await Course.find({})
    res.json({
        courses : response
    })
});

module.exports = router;