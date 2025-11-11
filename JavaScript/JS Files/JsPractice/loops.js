//for loop;
for(let i=0;i<=10;i++){
    console.log(i)
}
console.log("--------------------------")

//for....of loop  most in for loop ?? best way to use for...of loop
const array=[1,2,3,4,5]
for(const e of array){
    console.log(e);
}
for(let i=0;i<array.length;i++){
    console.log(array[i]);
}
console.log("--------------------------")

// while loop
let i=1
while (i<=10){
    console.log(i)
    i++;
}
console.log("--------------------------")

//do-while loop
let j=0;
do {
console.log(j)
}
while(j<=10);
// break:
let num=0;
while(num<=100){
    console.log(num)
    if(num%5==0){
        console.log('hi')
    }
}
console.log('-----------------------')
const browser=['chrome','edge','IE']
for (const e of browser){
    if(e=="edge"){
    console.log('launch edge....') 
    break;
    }
}

// for ....in loop on object
const user={
    name:'Vijay',
    age:'28',
    city:'Hyderabad'
}
for(const key in user){
    console.log(key + ':'+user[key]);
}
