const fs=require("fs")

function ReadAndModifyFile(filePath){
    fs.readFile(filePath,"utf-8",(err,data)=>{
        console.log(data)
        let newdata=removeSpaces(data)
        writeFile(filePath,newdata)
    })
}

function removeSpaces(data){
    const result = data.split(' ').filter(word => word !== '').join(' ');
    console.log(result)
    return result
}
function writeFile(filePath,data){
    fs.writeFile(filePath,data,(err)=>{
        console.log("written")
    })
}

let filePath="medium/1-file-cleaner.md"


ReadAndModifyFile(filePath)