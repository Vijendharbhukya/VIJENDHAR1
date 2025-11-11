//array/object----> variables
//1. Array Destructuring
const A=[1,2,3,4,5]
const [a,b,c,d,e,f]=A
console.log(a)
console.log(b)
console.log(c)
const lang=['js','j','R','B']
const[p,q,...testlang]=lang//spread operator
console.log(testlang)
/// Object
const user={
    firstName:'Tom',
    lastName:'Smith',
    age:29
}
const {firstName,lastName,age}=user