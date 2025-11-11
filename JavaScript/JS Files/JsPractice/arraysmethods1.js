//1.every():
let n=[1,2,3,4,5]
let N=n.every((e)=>e<10);
console.log(N);//it gives boolean values(true or false)
//2.some():
let S=[1,2,3,4,5];
let s=S.some((e)=>e%2===0);
console.log(s);// boolean value
//3.find():
let f=[1,2,3,4,5];
let F=f.find((e)=>e%2===0)
console.log(F)//2 it give only first element in the given statement and break it and gives the values
//4.indexOf():and lastIndexOf():
let i=["apple","bannana","mango"]
let iO=i.indexOf("mango")
let is=i.lastIndexOf("mango")
console.log('indexof',iO)
console.log('indexof',is)
//5.reverse();
let rev=i.reverse()
console.log(i)
// sort():
let alp=['a','c','b','d'];
let Al=alp.sort();
console.log(Al)
