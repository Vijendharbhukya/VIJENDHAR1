// 1.frequency 
const elements =['a','b','c','a','b','a','b','c'];
const frequency={};
elements.forEach(item=>{
    frequency[item]=(frequency[item]||0)+1;
})
console.log(frequency);
//1. frequency without Build in methods
let A=[1,2,3,4,5,3,2,1,3,4,6,2,1,3];
function Freq(A){
    let Fre={};
    for(let item of A){
        Fre[item]=(Fre[item]||0)+1;
    }
    return Fre;
}
console.log(Freq(A))

//2 sorting 
const Sorting =['a','b','c','a','b','a','b','c'];
Sorting.sort();
console.log(Sorting);
//without in build method 
function Sorted(arr){
    for(let i=0;i<=arr.length-1;i++){
        for(let j=0;j<=arr.length-i-1;j++){
            if(arr[j]>arr[j+1]){
                let temp=arr[j];
                arr[j]=arr[j+1];
                arr[j+1]=temp;
                
            }
        }
    }
    return arr;
}

let nums = [64, 34, 25, 12, 22, 11, 90];
console.log("Sorted array:", Sorted(nums));

//3.Array duplicates  by using filter and indexOf methods
const arr = ['a', 'b', 'c', 'a', 'b', 'a', 'b', 'c'];
const duplicates = arr.filter((item, index) => arr.indexOf(item) !== index);
const uniqueDuplicates = [...new Set(duplicates)];
console.log(uniqueDuplicates); // ['a', 'b', 'c']
// 3. Remove Duplicates (gets Unique values Only)
const arr1 = ['a', 'b', 'c', 'a', 'b', 'a', 'b', 'c'];
const unique=[...new Set(arr1)];//new Set(arr1)->A Set is a built-in JavaScript object that stores unique values only.
console.log(unique);
//3. without buildin methods
function duplicate(arr){
  let dup=[];
  let Value={}
  for(let item of arr){
     if(!Value[item]){
         dup.push(item);
         Value[item]=true;
     } 
  }
  return dup;
}
let c=[1,2,3,4,5,1,2,3];
console.log(duplicate(c))

//4.Program to find longest word in a given sentence ? 
//fing logest word in a sentences//
const String = "hello Vijendhar good morning";
const Fun=(String)=>{
const S=String.split(' ')
return S.reduce((acc,curr)=>acc.length<curr.length?curr:acc)
}
console.log(Fun(String))
// without inBuild methods
let Str="Vijendhar Soujanya Jahnavibhukya";
function Long(Str){
const words=Str.split(" ");
let longest='';
for(let word of words){
    if(word.length>longest.length){
        longest=word;
    }
}
return longest;
}
console.log(Long(Str));

//4.How to check whether a string is palindrome or not ? 
function isPalindrome(str) {
  // Remove non-alphanumeric characters and convert to lowercase
  const cleaned = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
  const reversed = cleaned.split('').reverse().join('');
  return cleaned === reversed;
}
// Example usage:
console.log(isPalindrome("madam"));         // true
console.log(isPalindrome("racecar"));       // true
console.log(isPalindrome("hello"));         // false
console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
//Or
function isPalindrome(str) {
    const reversed = str.split('').reverse().join('');
    return str === reversed;
}
console.log(isPalindrome("madam")); // true
console.log(isPalindrome("hello")); // false

//5.Search text in a given sentence  
const Sen="JavaScript is a powerful language.";
const Search="powerful";
const Sear=(Sen,Search)=>{   
    return Sen.includes(Search);
}
console.log(Sear(Sen,Search));

//Program to find Reverse of a string Without using built-in method ? in build methods are .split() .reverse().join()
function reverseString(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}
// Example usage:
const input = "JavaScript";
const output = reverseString(input);
console.log("Reversed String:", output); // tpircSavaJ

//Write a javascript function that reverses the order of words in a sentence without using the built-in reverse() method. 
function reverseWords(sentence) {
  const words = sentence.split(" ");
  const reversed = [];
  for (let i = words.length - 1; i >= 0; i--) {
    reversed.push(words[i]);
  }
  return reversed.join(" ");
}
const ip = "JavaScript is fun to learn";
const op = reverseWords(input);
console.log(op); // Output: "learn to fun is JavaScript"

//with built-in method
function reverseWords(sentence) {
  return sentence.split(" ").reverse().join(" ");
}
console.log(reverseWords("Hello world this is JavaScript"));
// Output: "JavaScript is this world Hello"



//Find the factorial of given number ?  
Factorial =(n)=>{
if(n<0) return "Negative value wount Accept"
let Result=1;
for(let i=2; i<=n;i++){
 Result *=i;
}
return Result;
}
console.log("Factorial of 5:", Factorial(5)); 

//Find the max count of consecutive 1’s in an array ?  
function maxConsecutiveOnes(arr2){
    let maxCount=0;
    let currentCount=0;
for(let i=0;i<arr2.length;i++){
    if(arr2[i]===1){
      currentCount++;
      if(currentCount>maxCount){
          maxCount=currentCount;
      }
    }else{
        currentCount=0;
    }
}
    return maxCount;
}
const arr2 = [1, 1, 0, 1, 1, 1, 0, 0, 1];
console.log(maxConsecutiveOnes(arr2));


//Given 2 arrays that are sorted [0,3,4,31] and [4,6,30]. Merge them and sort [0,3,4,4,6,30,31]?  
function mergeSortedArrays(arr1, arr2) {
  const mergedArray = [];
  let i = 0;
  let j = 0;
  // Compare elements from both arrays and push the smaller one
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      mergedArray.push(arr1[i]);
      i++;
    } else {
      mergedArray.push(arr2[j]);
      j++;
    }
  }
  // Add remaining elements (if any)
  while (i < arr1.length) {
    mergedArray.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    mergedArray.push(arr2[j]);
    j++;
  }
  return mergedArray;
}
// Example usage:
const array1 = [0, 3, 4, 31];
const array2 = [4, 6, 30];
const result = mergeSortedArrays(array1, array2);
console.log(result); // Output: [0, 3, 4, 4, 6, 30, 31]

//Create a function which will accepts two arrays arr1 and arr2. The function should return true if every value in arr1 has its corresponding value squared in array2. The frequency of values must be same. 
function same(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  const frequencyCounter1 = {};
  const frequencyCounter2 = {};
  for (let val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }
  for (let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }
  for (let key in frequencyCounter1) {
    const squaredKey = key ** 2;
    if (!(squaredKey in frequencyCounter2)) return false;
    if (frequencyCounter2[squaredKey] !== frequencyCounter1[key]) return false;
  }
  return true;
}

//Given two strings. Find if one string can be formed by rearranging the letters of other string.
function isAnagram(str1, str2) {
  if (str1.length !== str2.length) return false;
  const lookup = {};
  for (let char of str1) {
    lookup[char] = (lookup[char] || 0) + 1;
  }
  for (let char of str2) {
    if (!lookup[char]) return false;
    lookup[char] -= 1;
  }
  return true;
}

//Write logic to get unique objects from below array ?  
//I/P: [{name: "sai"},{name:"Nang"},{name: "sai"},{name:"Nang"},{name: "111111"}];  
//O/P: [{name: "sai"},{name:"Nang"}{name: "111111"}  
function getUniqueObjects(arr) {
  const seen = new Map();
  for (let obj of arr) {
    if (!seen.has(obj.name)) {
      seen.set(obj.name, obj);
    }
  }
  return Array.from(seen.values());
}
//Write a JavaScript program to find the maximum number in an array.
function findMax(arr) {
  return Math.max(...arr);
}
// Example usage:
const numbers = [10, 45, 32, 67, 89, 23];
const maxNumber = findMax(numbers);
console.log("Maximum number:", maxNumber); // Output: 89

//Write a JavaScript function that takes an array of numbers and returns a new array with only the even numbers.  
function getEvenNumbers(arr) {
  return arr.filter(num => num % 2 === 0);
}
const number1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = getEvenNumbers(numbers);
console.log(evenNumbers); // Output: [2, 4, 6, 8, 10]

//Write a JavaScript function to check if a given number is prime.  
function isPrime(num) {
  if (num <= 1) return false; // 0 and 1 are not prime
  if (num === 2) return true; // 2 is the only even prime number
  if (num % 2 === 0) return false; // eliminate even numbers
  for (let i = 3; i <= Math.sqrt(num); i += 2) {
    if (num % i === 0) return false;
  }
  return true;
}
console.log(isPrime(2));    // true
console.log(isPrime(17));   // true
console.log(isPrime(18));   // false
console.log(isPrime(1));    // false

//Write a JavaScript program to find the largest element in a nested array.  
//[[3, 4, 58], [709, 8, 9, [10, 11]], [111, 2]] 
function findMaxInNestedArray(arr) {
  let max = -Infinity;
  function findMax(subArr) {
    for (let item of subArr) {
      if (Array.isArray(item)) {
        findMax(item); // recursive call for nested arrays
      } else {
        if (item > max) {
          max = item;
        }
      }
    }
  }
  findMax(arr);
  return max;
}
const nestedArray = [[3, 4, 58], [709, 8, 9, [10, 11]], [111, 2]];
const maxValue = findMaxInNestedArray(nestedArray);
console.log("Maximum value:", maxValue); // Output: 709

//24..Implement a javascript function that flattens a nested array into a single-dimensional array.  
function flattenArray(arr) {
  const result = [];
  function flatten(subArr) {
    for (let item of subArr) {
      if (Array.isArray(item)) {
        flatten(item); // recursively flatten nested arrays
      } else {
        result.push(item);
      }
    }
  }
  flatten(arr);
  return result;
}
//same one as 24question.
var arra=[0,[1,2],3,4,[5,6,7],8,9];
let result12=[...arra];
let i=0;
while(i<result12.length){
    if(Array.isArray(result12[i])){
        result.splice(i,1,...result12[i])
    } else{
        i++;
    }
}
console.log(result12);
//Or
let data=[1,2,3,[4,5],6,[7,8],9]
console.log(data.flat(1));//output [1,2,3,4,5,6,7,8,9]

//Write a JavaScript function that returns the Fibonacci sequence up to a given number of terms. 
function generateFibonacci(n) {
  if (n <= 0) return [];
  if (n === 1) return [0];
  if (n === 2) return [0, 1];
  const fib = [0, 1];
  for (let i = 2; i < n; i++) {
    fib.push(fib[i - 1] + fib[i - 2]);
  }
  return fib;
}

//Given a string, write a javascript function to count the occurrences of each character in the string.  
function countCharacters(str) {
  const charCount = {};
  for (let char of str) {
    charCount[char] = (charCount[char] || 0) + 1;
  }
  return charCount;
}
const result1 = countCharacters("hello world");
console.log(result1);

//Write a javascript function that sorts an array of numbers in ascending order.  
function sortAscending(arr) {
  return arr.sort((a, b) => a - b);  // decending order return arr.sort((a, b) => b - a);
}
const numb = [5, 2, 9, 1, 7];
const sorted = sortAscending(numb);
console.log(sorted); // Output: [1, 2, 5, 7, 9]

//Write a function which converts string input into an object  
//("a.b.c", "someValue");  
//{a: {b: {c: "someValue"}}}  
function stringToNestedObject(path, value) {
  const keys = path.split(".");
  const result = {};
  let current = result;
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    if (i === keys.length - 1) {
      current[key] = value; // assign value to the last key
    } else {
      current[key] = {};
      current = current[key]; // move deeper
    }
  }
  return result;
}
const outputs = stringToNestedObject("a.b.c", "someValue");
console.log(outputs);
// Output: { a: { b: { c: "someValue" } } }
//superclass 


let array = [
  {
    id: 7721,
    name: "grill",
    purchases: [
      {
        id: 50,
        name: "All"
      }
    ]
  }
];
function findSuperClassOfId(targetId) {
  return array.find(item =>
    item.purchases.some(purchase => purchase.id === targetId)
  );
}
const results = findSuperClassOfId(50);
console.log(results);
















