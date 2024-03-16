// const x: number=1
// console.log(x)

function greet(firstName: string){
    console.log("hello"+firstName)
}

greet("me")

function sum(a:number , b:number) :number {
    return (a+b)
}
function isLegall(age:number) : boolean{
    return age>=18
}
function delayedCall(fn: () => void) {
    setTimeout(fn, 1000);
}
delayedCall(function() {
    console.log("hi there");
})


//interface can be used to implement classes
interface User{
    firstName : string
    lastName:string
    age:number
    email?:string;
}
//type supports  optional property and union type (union and intersection)
type User1 ={
	firstName: string
	lastName: string
	age: number
}

function isLegal(user:User) : boolean{
    return user.age>=18
}

//union
type StringNumber= string | number


function greett(id:StringNumber) : void {
    console.log(`${id}`)
}

//intersection
type Employee = {
    name: string;
    startDate: Date;
  };
  
  type Manager = {
    name: string;
    department: string;
  };
  
  type TeamLead = Employee & Manager;
  
  const teamLead: TeamLead = {
    name: "aditya",
    startDate: new Date(),
    department: "Software developer"
  };

  type numArr=number[]

  function maxValue(arr: numArr) {
    let max = 0;
    for (const element of arr) {
        if (element > max) {
            max = element
        }
    }
    return max;
}

console.log(maxValue([1, 2, 3]));

interface User {
	firstName: string;
	lastName: string;
	age: number;
}

function filteredUsers(users: User[]) {
    return users.filter(x => x.age >= 18);
}

console.log(filteredUsers([{
    firstName: "adi",
    lastName: "Singh",
    age: 21
}, {
    firstName: "Raman",
    lastName: "Singh",
    age: 16
}, ]));
  
