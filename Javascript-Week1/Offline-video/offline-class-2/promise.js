const fs=require('fs')

function myAsync(){
    return new Promise(function(resolve){
        fs.readFile("a.txt","utf-8",function(err,data){
            resolve(data)
        })
    })
}

// function onDone(data){
//     console.log(data)
// }

// myAsync().then(onDone)

async function main(){
    let value=await myAsync()
    console.log(value)
}

main()