// let mydate=new Date();
// console.log(typeof mydate);
// console.log(mydate)

// console.log(mydate.toString());//date+time+gmt

// console.log(mydate.toDateString())//only date

// console.log(mydate.toISOString());

// console.log(mydate.toJSON())
// console.log(mydate.toLocaleDateString('en-IN'))//converted to local format

// console.log(mydate.toLocaleTimeString());

// console.log(mydate.toLocaleTimeString('en-IN'));

// console.log(mydate.toTimeString()) //gmt time
// console.log(mydate.toUTCString())//gmt time


let newdate=new Date(2003,6,22);
let newdate1=new Date(2003,6,22,7,8);

console.log(newdate.toDateString())
console.log(newdate1.toLocaleDateString())
let newdate2= new Date("22-7-2003")
//console.log(newdate2.toLocaleDateString())


//timestapm
let mystamp=Date.now()
console.log(mystamp)
console.log(newdate.getTime())


//change from millisecond to second
console.log(Math.floor(mystamp/1000))

let neww=new Date();
console.log(neww.getDate())
console.log(neww.getDay())
console.log(neww.getMonth()+1)//to get the actual month
//month  start from 0 in javascript









