for (let i = 0; i < 5; i++) {
    console.log(i)
    
}




//printing table from 1 to 10

for(i=1;i<=10;i++){
    for(j=1;j<=10;j++){
        console.log(i, " * ", j," = ",i*j)
    }
    console.log()
}





let arr=["Cartoon_Network","Pogo","Nick","Hungama"]
for (let index = 0; index < arr.length; index++) {
    const element = arr[index];   
    if(element=="Nick"){
        break;
    }
    console.log(element)
}

//continue jump the next iteration and leaves the rest of the code


for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        continue
    }
   console.log(`Value of i is ${index}`);   
}