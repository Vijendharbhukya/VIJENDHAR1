//map methods
let num=[1,2,3];//(e)always it iterate the num array elements 
let n=num.map((e)=>e*2);//map always return new array
console.log(n)// [2,4,6]

//filter:
let number=[1,2,3,4,5];
let ns=number.filter((e)=> e % 2 === 0);
console.log(ns)//[2,4]

let employee=[
    {name:'V',age:28,gender:'male'},
    {name:'J',age:1,gender:'Female'},
    {name:'S',age:23,gender:'Female'},
    {name:'B',age:42,gender:'male'}
];
let fe=employee.filter((emp)=>{
    return emp.gender==='Female' && emp.age>20;
});
console.log(fe)//[ { name: 'S', age: 23, gender: 'Female' } ]

//Reduce:
let nu=[1,2,3,4,5]
let nm=nu.reduce((acc,num)=>acc+num, 0);
console.log(nm)//15
//1st-->0+1=1,is acc(0) + num(1) 
//2nd-->1+2=3
// 3rd->3+3=6
//4th->6+4=10
//5th->10+5=15
let top=[10,5,25,8,30,15]
let maxNum=top.reduce((max,num)=>{//max=30, num=8
    if(num>max){//8>30
        return num;//30
    }
    else{
        return max;//30
    }
},top[0]);
console.log(maxNum)
//------
let cartItem=[
    {name:'jeans',price:600},
    {name:'shirt',price:400},
    {name:'shoes',price:800},
    {name:'Tshirt',price:200}
];
let item=cartItem.reduce((total,items)=>total +items.price,0)
console.log(item)
