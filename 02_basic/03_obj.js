//OBJECT
const sym=Symbol("Data")
const myobj={
    name:"Vinod",
    age:51,
    [sym]:"Privacy",
    isloggedin:true,
    location:"deoghar",
    lastlogindays:["Tuesday","Saturday"],
    "full name":"Vinod Paswan",
    email:"vinod@gmail.com",
}
console.log(myobj.age);
console.log(myobj["full name"])
console.log(myobj["lastlogindays"])
console.log(myobj["age"]);

console.log(myobj[sym]);///no need for inverted comma

//freeze
myobj.name="Aryan";
//Object.freeze(myobj)
myobj.name="Naman";
console.log(myobj)

myobj.greeting=function(){
    console.log("Welcome js user")
}
console.log(myobj.greeting())//jab freeze hai tab nahi chalega
myobj.greeting1=function(){
    console.log(`Welcome js user ${myobj.name}`)
    console.log(`welcome js user ${this.age}`)//this point to the current object
    
}
console.log(myobj.greeting1())