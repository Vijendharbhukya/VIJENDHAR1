//ES6
//var – old way (function-scoped)
//let – modern way (block-scoped)
//const – for constants (block-scoped, cannot be reassigned)
//scope:var
//functionaly/locally+global scope
var x=10;
function X(){
    var y=20;
}
X();
console.log(x)
//
var g;
console.log(g)//undefine 
//issue with var
var flag='hi';
var t1=4;
if(t1>3){
    var flag='top'
}
console.log(flag);//we loss our first flag=hi
//let:
//scope:block scoped -{}
let v='hi';
let time=4;
if(time>3){
    var msg='top'
}