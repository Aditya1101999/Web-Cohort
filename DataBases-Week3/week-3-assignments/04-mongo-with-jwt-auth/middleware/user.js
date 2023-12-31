const jwt=require("jsonwebtoken")
const {secret}=require("../config")
function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    const token=req.headers.authorization//Bearer token
    const words=token.split(" ")
    const jwtToken=words[1]
    const verified=jwt.verify(jwtToken,secret)
    if(verified.username){
        req.username=verified.username//can be used later for the routes
        next()
    }
    else{
        res.status(403).json({msg:"no user exists"})
    }
}

module.exports = userMiddleware;