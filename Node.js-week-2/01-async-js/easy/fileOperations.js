const fs=require("fs")

function ReadFile(filePath){
    fs.readFile(filePath,"utf-8",(err,data)=>{
        console.log(data)
    })
}

function writeFile(filePath,data){
    fs.writeFile(filePath,data,(err)=>{
        console.log("written")
    })
}

let filePath="easy/4-write-to-file.md"
let data="test"


ReadFile(filePath)
writeFile(filePath,data)