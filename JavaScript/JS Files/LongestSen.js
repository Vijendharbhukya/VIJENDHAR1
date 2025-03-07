//fing logest word in a sentences//
const String = "hello Vijendhar good morning";
const Fun=(String)=>{
const S=String.split(' ')
return S.reduce((acc,curr)=>acc.length<curr.length?curr:acc)
}
console.log(Fun(String))
