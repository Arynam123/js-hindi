const userEmail=[]
if(!userEmail){
    console.log("please enter an username!!")
    
}
else{
    console.log("got a username")
}
//undefined=false
//0=false
//[]=false
//""=false

const obj={}
if(Object.values(obj).length===0){
    console.log("no entries present");
}

//nullish calessicng operatoru ??? :NULL UNDEFIENDE
//specical case of logical or


//always retruns the first value 
//in case of undefined it choose 2nd value


let val;
//val = 5 ?? 10
val = null ?? 10 ?? 20
console.log(val)



let val1;
//val1=undefined ?? null
//null is output 

val1=null ?? 1 ?? 43
console.log(val1)


//terniary opreratior

//condition ? true:false
const value=53;
value<100?console.log("value is less than 100"):console.log("value is more than 100")

