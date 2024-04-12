// creating an obj
const linkedin= new Object()
const facebook={}
facebook.name="Hacker"
facebook.email="hackertarun2@gmail.com"
facebook.id="121avc"
facebook.isloggedin=false

console.log(facebook);
facebook.name="Aryan"
console.log(facebook);

Object.freeze(facebook)
facebook.name="Tarun"
console.log(facebook);

//nested objest
const obj1={
    email:"aryan@gmail.com",
    fullname:{
        username:{
            firstname:"aryan",
            lastname:"choudhary"

        }

    }
}
console.log(obj1.fullname.username.lastname)


// ek aur nested loop
const obj2={
    year:{
        branch:{
            class:"301 B"
        }
        
    }
}
console.log(obj2.year.branch.class)

const obja={1:"a",2:"b"}
const objb={1:"x",2:"y"}
const objc={1:"p",2:"q"}

//const objd={...obja,...objb,...objc}
const objd=Object.assign({},obja,objb,objc)
console.log(objd);
console.log(Object.keys(obja))
console.log(Object.entries(objb))
console.log(Object.values(objb))


const course={
    name:"hindi",
    price:0,
}
const{name:coursename}=course
console.log(coursename)