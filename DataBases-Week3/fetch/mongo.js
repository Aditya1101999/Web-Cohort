const express = require("express")
const app=express()
const jwt = require("jsonwebtoken")
const mongoose = require("mongoose")
const jwtPassword = "123456"

app.use(express.json())
mongoose.connect(
  "mongodb+srv://Aditya:Y9NUuGGxO8aKjFIU@cluster0.lrn4k57.mongodb.net/tester",
);

// const model = mongoose.model('Users', { name: String , email : String , password : String });

// const user = new model({ 
//   name: 'Zildjian',
// email: 'hehe',
// password:'123456' });

// user.save()



const User = mongoose.model("User", {
  name: String,
  username: String,
  pasword: String,
});

function userExists(username, password) {
  // should check in the database
  return User.findOne({email:username,password:password})


}

app.post("/signin", async function (req, res) {
  const username = req.body.username;
  const password = req.body.password;

  if (!userExists(username, password)) {
    return res.status(403).json({
      msg: "User doesnt exist in our in memory db",
    });
  }

  let token = jwt.sign({ username: username }, jwtPassword);
  return res.json({
    token,
  });
});

app.get("/users", function (req, res) {
  const token = req.headers.authorization;
  try {
    const decoded = jwt.verify(token, jwtPassword);
    const username = decoded.username;
    // return a list of users other than this username from the database
  } catch (err) {
    return res.status(403).json({
      msg: "Invalid token",
    });
  }
});

app.post("/signup",async function(req,res){
  const userName=req.body.username
  const password=req.body.password
  const name=req.body.name

  const existingUser=await User.findOne({email:username})
  if(existingUser){
    return res.status(400).send('Email already exists')
  }
  const user=new User(
    {
      name:name,
      email:userName,
      password:password
    }
  )
  user.save()
})

app.listen(3000);