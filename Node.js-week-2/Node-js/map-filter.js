//multiply each element of an array with 2

let arr=[1,2,3,4,5]
function transform(i){
    return i*2
}
let ans=arr.map(transform)
// or , let ans=arr.map((i)=>{return i*2})
console.log(ans)

let map=(arr,transformation)=>{
    //change array according to transformation
    let ans=[]
    for(const element of arr){
        ans.push(transformation(element))
    }
    return ans
}

let ans1=map(arr,transform)
console.log(ans1)

//get all even elements of array

function filteringLogic(i){
    return i%2==0
    //str.startsWith() , etc (boolean functions)
}
let evens = arr.filter(filteringLogic)
console.log(evens)