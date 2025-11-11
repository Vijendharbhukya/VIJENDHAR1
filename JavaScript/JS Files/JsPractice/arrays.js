let myArray=[];
let numbers=[1,2,3,4,5];
let fruits=['apple','ball','cat','dog'];
let lang=["Java","Javascript","React.Js"]
//1.push add the element at the last of array
lang.push("XML")
console.log(lang)//out put[Java,Js,React.js,XML]
//2.pop it removes the last element from the array
lang.pop();
console.log(lang)// output java,Js
//3.shift:
let fruit=['apple','ball','cat','dog'];//an array with string
let firstFruit=fruit.shift();
console.log(firstFruit)//output [apple]
//4.unshift:
let colors=['red','blue','green','yellow']
colors.unshift('pink','white')//it add the given element in the starting of the elements
console.log(colors);//output[pink,white,red,blue,green,yellow]
console.log(colors.length)
//5.Splice:
let animals=['dog','cat','goat','fish'];//1,1 is that 1 is that start elemt and next one is remove element
animals.splice(1,1,'bear'); //it removes the index of element and deleted element should be replace with some other element
console.log(animals);//[dog,bear,goat,fish]
//6.slice: return new array 
let pop=[1,2,3,4,5,6]
let newPop=pop.slice(1,4)
console.log(newPop)//output [ 2, 3, 4 ]
//concat:
let newArray=colors.concat(pop)
console.log(newArray);
//indexOf:
let color=['red','blue','green','yellow'];
let indexRed=color.indexOf('red')
console.log(indexRed);// output 0;

//includes:
let test=['admin','customer','seller','vendor']
let flag=test.includes('admin')//includes gives boolean values
console.log(flag)// true
//forEach:
let n=[1,2,3,4,5,6,7,8,9];
n.forEach((e)=>{//(e) is a callback function it iterate of all n values
console.log(e)//output 1,2,3,4,5,6,7,8,9
})

