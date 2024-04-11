const myarr=new Array(1,32,322,3232,232424)
console.log(myarr[3]);

//to add element in the beginning 
myarr.unshift(100);
console.log(myarr)
//removing element from the beginning
myarr.shift()
console.log(myarr)


console.log(myarr.includes(100));//true or false

console.log(myarr.indexOf(3232));

//converting array to stirng using join
 const newarr=myarr.join();
 console.log(`the original array is ${myarr}`)
//newarr is now a string
 console.log(`the changed array is ${newarr}`)



 ///very very important
 ///slice and splice

 console.log("A:Original array ",myarr)

 const arr1=myarr.slice(1,3);
 console.log("B: the sliced array is ",arr1)

 const arr2=myarr.splice(1,3);
 console.log("C: the spliced array is ",arr2);

 console.log("D: Array after spliced :",myarr);