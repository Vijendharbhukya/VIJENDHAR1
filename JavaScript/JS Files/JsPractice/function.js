//1.function declaration

const { generate } = require("css-tree");

//A function is a block of code designed to perform a particular task. It is executed when "called" or "invoked".
function add(a,b){
return a+b;
}
console.log(add(5,5))
//2.Function Expression: Annonymous function
const multiply = function (x,y){
    return x*y;
}
const ms=multiply(5,5)
console.log(ms)
//3. Arrow function expression:annonymous function
const divide=(a1,a2)=> a1+a2;
console.log(divide(5,5))
//4.function constructor:
new Function('a','b','return a-b;')
//5.IIFE(Immediately Invoked Function Expression)
// (function(){
//     console.log("server is up runing on port 3000");
// })()
//6.Generator function:
// //function+ and yeild keyword
// function* generate(){
//     yeild 1,
//     yeild 2,
//     yeild 3
// }
//7.Annanymous function:
const numbers=[1,2,3,4,5]
const square=numbers.map((e)=>{
    return e*e;
});
console.log(square);
//8.Recursive function:
function factorial(n){
    if(n===0||n===1){
        return 1;
    }
    else{
        return n* factorial(n-1)
    }
}
console.log(factorial(4))
//9.Higher order function: if function take one or more number of variable
function add(a,b){
    return a+b;
}
function operate(funcName,a,b){
    return funcName(a,b);
}
const s= operate(add,4,5);
console.log(s);
