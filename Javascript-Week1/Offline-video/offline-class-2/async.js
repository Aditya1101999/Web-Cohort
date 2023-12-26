const fs=require('fs')

fs.readFile("a.txt","utf-8",function(err,data){
    console.log(data)
})

console.log("hello main")

function sum(){
    let sum=0
    for(let i=0;i<10000;i++){
        sum+=i
    }
    console.log(sum)
    return sum
}

setTimeout(sum,1000)
console.log("hellooooo")
