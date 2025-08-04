//reduce() – Reduce array to a single value
const nums = [1, 2, 3, 4];
const sum = nums.reduce((acc, val) => acc + val, 0);
console.log(sum); // 10

/*array.reduce((accumulator, currentValue) => {
  // logic
}, initialValue);

accumulator: stores the result of the previous computation.
currentValue: the current element being processed.
initialValue: the starting value for the accumulator (in this case, 0).*/

/*array=[1,2,3,4]
accumulator= starts from 0
currentValue= 1
initialValue=(accumulator+currentValue)*/