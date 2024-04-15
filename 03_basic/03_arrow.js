
//example of this
const user={
    username:"vikas",
    id:"909",
    welcomemessage:function(){
        console.log(`${this.username} ,welcome to webite your id is ${this.id}`)
    }
}
console.log(user)
user.welcomemessage()

function chaiaurcode(){
    let username="Binod_Khanna"
    console.log(this.username)
}
chaiaurcode()//undefined because trying to search from outside





//example of this function
const fun=()=>{
    let username="Binod_Khanna"
    console.log(this)//undefiend
}
chaiaurcode()
  

//exmaple of arrow function

const add=(n1,n2)=>{
    return n1+n2;

}
console.log(add(3,5))


//arrow fuction can work without return
//return ke jagah me common bracket ata hai


//const addtwo=(n1,n2)=> (n1+n2);
const addtwo=(n1,n2)=>({username:"Aryan"})
console.log(addtwo(3,5))
const addTwo = (num1, num2) => ({username: "hitesh"})
console.log(addTwo(3, 4))






function return_obj(){
    const user={
        name:"Aryan",
        age:21,
        gender:"M",
    }
    console.log(user)
}

return_obj()


