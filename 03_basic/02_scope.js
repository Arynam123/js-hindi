//nested function
function one(){
    console.log("Aryan Kumar Choudhary");
    function two(){
        secondname="kumar"
        lastname="Choudhary"
        console.log(secondname);
    }
    //console.log(secondname)it cant be called outside the scope
    two()
}
one()


// ++++++++++++++interesting case+++++++++++++++++++


console.log(sayhello())//the call is above the function but it will execute
function sayhello(){
    return "hello"
}


//declairng a fuction in variable
//console.log(fun())
let fun=function(){
    return "hello"
}
console.log(fun())



