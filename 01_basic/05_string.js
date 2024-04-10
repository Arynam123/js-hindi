const name="NagaArjun";
const repocount=10;


//old version of printing
console.log(name+" my repocount is "+repocount);


//new version of printing in javascript
console.log(`Hello my name is ${name} and my repocount is ${repocount}`)


//playing with stirng
const gameName=  new String('aryan-hc-com')
console.log(gameName.charAt(8));
console.log(gameName.indexOf('h'));


const newstring=gameName.slice(-9,-1);
const newstring1=gameName.substring(2,7);


console.log(newstring);
console.log(newstring1);

const trimstirng="   aryan  kumar   ";
console.log(trimstirng.trimStart());
console.log(trimstirng.trimEnd());
console.log(trimstirng.trim());




const url="https://hitesh.com/hitesh%20choudhary"
console.log(url.replace('%20','-'));
console.log(url.includes('aryan'));//return true or false

//change to an array
console.log(url.split('/'));


//i have to practise more 10-15 string functions

