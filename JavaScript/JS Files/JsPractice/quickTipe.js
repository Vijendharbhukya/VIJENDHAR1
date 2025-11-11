
//1.find unique values from array:
const array=[1,2,3,4,5,1,3,2,4,5];
const unique= [...new Set(array)];
console.log(unique)

//2.int to string
const n=3;
const s=n+'';
console.log(s+10);
//or
const s1= String(n);
console.log(s1+10);

//3.flot to int
const fl=3.44
const intN=parseInt(fl)
console.log(intN)

//4.check if a variable is a number
const v=56;
if(typeof v==='number'&& !isNaN(v)){
    console.log(v + ' '+ 'is number');
}

// 5.swap varaiable value
let a=8;
let b=9;
[a,b]=[b,a];
console.log(a,b)

// 6.check if an Object has a property:
const person={
    name:'J',
    age:1
}
if(person.hasOwnProperty('name')){
    console.log('person has property');
}

//7. remove falsy value from the array:(false,0,',null,undefined,NaN);
const va=[0,1,false,2,'',3,null,undefined,NaN,4];
const nv=va.filter(Boolean);
console.log(nv)

//8.String----> Uppercase,lowercase
const str='Vijendhar Bhukya'
const ul=str.toUpperCase();
const l=str.toLowerCase();
console.log(ul)
console.log(l)

//9.checks if array contains a value:
const lan=['java','js','React js','java core',]
if(lan.includes('js')){
    console.log('js')
}

//10.check if an array is Empty:
const empty=[]
if(empty.length===0){
    console.log('Array is empty')
}

//11.generate a random number:
const min=10;
const max=20;
const randomNumber=Math.floor(Math.random()*(max-min+1))+min;
console.log(`Random Number: ${randomNumber}`);

//12.String to number:
const srtNum='32.111';
const x1=parseFloat(srtNum)
console.log(x1)

//13. Join array elements into a String:
const words=['Hello','Vijendhar']
const sentence=words.join(' ')
console.log(sentence)

//14. Get Object property:
const user={
    name:'Tom',
    age:23,
    dob:'23-07-2002'
};
console.log(user['name'])
console.log(user['age'])

//15. clone an array or Object:
const mark=[10,20,30,40,50]
const marksDup=[...mark]//spread operator
console.log(marksDup)

//Object clone
const userDup={...user}
console.log(userDup)

//16.convert object to array:
const employee={
    name:'Tom',
    age:23,
    dob:'23-07-2002'
};
//a.Keys array
const k=Object.keys(employee)
console.log(k)
//Values array:
const vs=Object.values(employee)
console.log(vs)
//c-key-value array
//a.  values array :
const kv=Object.entries(employee)
console.log(kv)

//17. get current date and time:
const currentDate=new Date();
console.log(currentDate.toLocaleString())

//18. check variable is defined:
let i;
if(typeof i==='undefined'){
    console.log('variable not defined')
}

// 19.truncate an array:
const test=[0,1,2,3,4,5,6,7]
test.length=3;
console.log(test)//[0,1,2]

//20. Last item in array:
const pop=[0,1,2,3,4,5,6,7]
const n1=pop.slice(-1)
console.log(n1)