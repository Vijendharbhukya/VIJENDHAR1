const removeDuplicates = (arr) => {
    return [...new Set(arr)];
  };
  
  const exampleArray1 = [1, 2, 2, 3, 4, 4, 5];
  console.log(removeDuplicates(exampleArray1)); // Output: [1, 2, 3, 4, 5]
  
  const exampleArray2 = ["apple", "banana", "apple", "orange", "banana"];
  console.log(removeDuplicates(exampleArray2)); // Output: ["apple", "banana", "orange"]
  