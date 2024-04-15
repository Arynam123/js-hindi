//immediatedly invoveled fuctin expression(IIFE)\
// function tellvalue(){
//     value="Aryan"
//     console.log(`the name is ${value}`)

// }
// tellvalue()

//now lets do it by iife

(function pista(){
    // named IIFE

    console.log(`DB CONNECTED`);
})();



((name)=>{
    // named IIFE

    console.log(` ${name}DB CONNECTED`);
})("Aryan");