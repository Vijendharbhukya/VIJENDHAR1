const { number } = require("yargs");

const sq=num => num*num;
const r=sq(5);
console.log(r)
//no parameter
const mssg=()=>'Hello Js'
console.log(mssg());
// with parameter
const add=(a,b)=> a+b;
console.log(add(4,5))
//
const person={
    firstName:'Vijendhar',
    lastName:'Bhukya'
}
const name=person=>`${person.firstName}${person.lastName}`
console.log(name)
//default values
const greet=(username='guest',age=0)=> `Hello, ${username}! you are`
const gl=greet()
console.log(gl)
//rest parameters... varags
const sum=(...numbers)=>numbers.reduce((acc,num)=>acc+num,0);
console.log(sum(1,2,3,4))
//1st-->0+1=1,is acc(0) + num(1) 
//2nd-->1+2=3
// 3rd->3+3=6
//4th->6+4=10
//max number using Math
const maxVal=(a,b,c)=>{
    return Math.max(a,b,c);
};
const M=maxVal(1,3,5);
console.log(M)