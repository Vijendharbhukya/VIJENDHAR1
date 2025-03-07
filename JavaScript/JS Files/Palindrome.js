
// const FunCtion =(Palondrome)=>{

// const p1=Palondrome.toLowerCase().replace(/[^a-z0-9]/g, "");
// const p2=p1.split('').reverse().join('');
// return p1===p2
// }
// console.log(Function("A man, a plan, a canal, Panama"))


const isPalindrome = (str) => {
    // Step 1: Normalize the string (convert to lowercase and remove non-alphanumeric characters)
    const normalizedStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  
    // Step 2: Reverse the string
    const reversedStr = normalizedStr.split('').reverse().join('');
  
    // Step 3: Compare the original string with the reversed string
    return normalizedStr === reversedStr;
  };
  
  console.log(isPalindrome("A man, a plan, a canal, Panama")); // true
  console.log(isPalindrome("hello")); // false