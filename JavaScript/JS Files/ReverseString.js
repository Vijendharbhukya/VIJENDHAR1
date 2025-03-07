const reverseStrng=(str)=>{
    let strng="";
    for(let i=str.length-1; i>=0; i--){
        strng += str[i]
    }
    return strng
}
const V1="Vijendhar"
console.log(reverseStrng(V1))