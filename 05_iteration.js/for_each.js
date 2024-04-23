const coding=["Aryan","nishant","nikhil"]
coding.forEach(function(val){
    console.log(val);
})
coding.forEach((value)=>{
    console.log(value)
})
coding.forEach((item,index,arr)=>{
    console.log(item,index,arr)
})
const mycodingskills=[
    {
        language:"java",
        short:"js",
    },
    {
        language:"python",
        short:"py",
    },
    {
        language:"javascript",
        short:"jscipt",
    } 
]
mycodingskills.forEach((val)=>{
    console.log(val.short)
})
