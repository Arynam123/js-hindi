const arr=[1,3,2,32,1]
for (const i of arr) {
    console.log(i)
}

const greeting="Hello how are you Mr Aryan..."
for (const greet of greeting) {
    //console.log(`Each char in greeting is ${greet}`)
}

//Map
//it set the value in form of key value 
//no duplicate
//it maintain the order of insertion

//map are iterable

const map=new Map()
map.set('In',"India")
map.set('Slk',"Sri lanka")
map.set('Aus',"Australia")
map.set('Eu',"Europe")
map.set('Sing',"Singapore")
for (const [key,value] of map) {
    console.log(key,"-",value);
    
}

//object is not iterable
myobj={
    username:"Aryan",
    id:"323",
}
// for (const [key,value] of myobj) {
//     console.log(key,"-",value);  
// }
for (const key in myobj) {
    if (Object.hasOwnProperty.call(myobj, key)) {
        const element = myobj[key];
        console.log(element)

    }   
}

myobj1={
    js:"javascript",
    cpp:"c++",
    py:"Python",
    rb:"ruby",
    swift:"Swift by apple"
}
for(const key in myobj1){
    //console.log(key)
    console.log(`${key} corresponds to the ${myobj1[key]}`)


}



const programming=["java","c++","python","Ruby"]
for(const key in programming){
    console.log(programming[key])

}

//map does not work for for in
const map1 = new Map()
map1.set('IN', "India")
map1.set('USA', "United States of America")
map1.set('Fr', "France")
map1.set('IN', "India")

for (const key in map1) {
    console.log(value);
}
