//again playing with array
const boys=new Array("Aryan","Santosh","Manish");
const girls=new Array("Madhu","Pooja","Nishu");

//trying to push boys-array with girls-array

boys.push(girls);
console.log("pushing boys array with girls array: ",boys);

//push fuction just make the array to an single element 



//concat do not change the original array 
//new array should be formed using concat fucntion
const boys1=new Array("Aryan","Santosh","Manish");
const girls1=new Array("Madhu","Pooja","Nishu");
teacher=boys1.concat(girls1)
console.log("Concated array:",teacher);
console.log(typeof teacher)//new array is formed




//simply using spread fuction ..
//when we want to concatinate two or more array we use ... ie spread fuction glass ki tarah toot jayeaga
const boy=new Array("Aryan","Santosh","Manish");
const girl=new Array("Madhu","Pooja","Nishu");
const merged=[...boy,...girl]
console.log("Merged array is:",merged);




//if we have multiarray and we want to convert it into single array then we have to use flat funtion

const multiarray=new Array([1,2,3[3,4[4,6,2],[434432,43],88932,1,0,-9]],77,89)//used a messed up condition 
console.log(multiarray.flat(Infinity));//lagta hai ki bahut jayda array le liye
//system hi pagla gaya sala


console.log(Array.isArray(6));
console.log(Array.from("Aryan"))//convert in an array


//when we need mutliple value to convert to an array we use of
let c=1;
let c1=2;
let c2=4;

console.log(Array.of(c,c1,c2));





