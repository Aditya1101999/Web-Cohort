//even no.s in an array
let arr=[1,2,3,4,5]
for(const element of arr){
    if(element%2==0){ console.log(element) }
}

//max no. in the array
let max=arr[0]
for(let el in arr){
    max=Math.max(max,el)
}
console.log(max)

//all male people first name given an complex object

let obj=[{
    name:"John",
    gender:"male"
},{
    name:"Priya",
    gender:"female",
    metadata:{
        school:"abc"
    }
},
{
    name:"Robert",
    gender:"male"
}

]
for(const element of obj){
    if(element.gender=="male"){ console.log(element.name)}
}

//program that reverses all elements in an array
let i=0;
let j=arr.length-1
while(i<j){
    let temp=arr[i]
    arr[i]=arr[j]
    arr[j]=temp
    i++
    j--
}

for(let el of arr){ console.log(el)}

