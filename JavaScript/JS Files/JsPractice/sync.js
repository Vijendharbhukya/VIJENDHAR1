// sync vs async behaviour
//Synchronous : Javascript executes code in a linear and sequential manner.Each line of code is executed one after the other and the program waits for each operation to complete before moving on to the next.
console.log('start')
for(let i=0;i<3;i++){
    console.log(i)
}
console.log('end')

//Async: javascript allows tasks to be started and continue in the background while the program executes the code.
console.log('start')
setTimeout(()=>{
    console.log("time out is done")
},2000)
console.log('end')
console.log("..........................")
// async 
const fs=require('fs')
const data=fs.readFileSync('Vijendhar.tx','utf-8')
console.log(data)
console.log('Bye JS')
//sync
const fs1=require('fs')
const data1=fs1.readFileSync('Vijendhar.tx','utf-8',(error,data)=>{
console.log(data1)
})
console.log('Bye S')