const myfuc=new function(){
    console.log("This is my first fuction")
}
console.log(typeof myfuc)
let sym=Symbol("data")
let obj={
    name:"Aryan",
    [sym]:"joker",
}
console.log(obj);
console.log(obj[sym])
//fuction is to make the work easier

function myname(){
    console.log("A");
    console.log("R");
    console.log("Y");
    console.log("A");
    console.log("N");

}
console.log(myname())//value
console.log(myname)//reference

//return fuction to print karne ka instruction denga hoga



function multiply(num1,num2){
    const p=num1*num2;

    return (`the product of the ${num1} and ${num2} is ${p}`)
}


multiply(5,9);//kuch print nahi karega
const value=multiply(5,9);
console.log(value)

//or diretly
console.log(multiply(98,5));


//logged in
function userloggin(username){
    //if value not given 
    // if(username===undefined){
    //     return(`please enter a username`)
    // }
    if(!username){
        return(`please enter a username`)
    }
    return`${username} just logged in`
}
console.log(userloggin())


function daanpeti(...val){
    return val
}
console.log(daanpeti(100,200,4,93493))
 

const user={
    username:"Aryan",
    price:322
}
function handleObject(objhandle){
    return (`the username is ${objhandle.username} and price is ${objhandle.price}`)
}
console.log(handleObject(user))


function getfirstvalue(objarray){
    return objarray[1]
}
console.log(getfirstvalue([1,3,4,44]))

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArray));



