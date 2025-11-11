const reverseStrng=(str)=>{
    let strng="";
    for(let i=str.length-1; i>=0; i--){
        strng += str[i]
    }
    return strng
}
const V1="Vijendhar"
console.log(reverseStrng(V1))
//number
function reverseNumber(num) {
  const reversed = num.toString().split('').reverse().join('');
  return parseInt(reversed) * Math.sign(num);
}
console.log(reverseNumber(1234));

// number reversed
function resNum(num){
    //[0-9]: same number
    if(num>=0 && num<=9){
        return num;
    }
    let revnum=0;
    while(num!=0){
        revnum=revnum*10+(num%10);//32*10+(1%10)=>320+1=321
        num=Math.floor(num/10)//Math.floor removes the last decimal number
    }
    return revnum;//321
}
console.log(resNum(321))//123
