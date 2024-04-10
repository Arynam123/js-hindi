
//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3


//stack(primitve )  and reference heap is non primitive
let score_cricket=100;
score1_cricket=score_cricket
console.log(score1_cricket);
score1_cricket=200;
console.log(score1_cricket);
//
console.log("orginal score"+score_cricket);


//reference or heap
let trialobj={
    name:"Ragnikant",
    age:49,

}
trailobj1=trialobj
trailobj1.age=12;
console.log(trialobj1.age)