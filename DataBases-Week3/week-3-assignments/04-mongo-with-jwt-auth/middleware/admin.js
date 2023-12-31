// Middleware for handling auth
const jwt=require("jsonwebtoken")
const {secret}=require("../config")
function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    const token=req.headers.authorization//Bearer token
    const words=token.split(" ")
    const jwtToken=words[1]
    const verified=jwt.verify(jwtToken,secret)
    if(verified.username){
        next()
    }
    else{
        res.status(403).json({msg:"no admin exists"})
    }
}

module.exports = adminMiddleware;