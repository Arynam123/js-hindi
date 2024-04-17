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
for (const [key,value] of myobj) {
    console.log(key,"-",value);  
}

