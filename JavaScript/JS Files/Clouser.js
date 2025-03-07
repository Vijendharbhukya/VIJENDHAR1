function outerFunction() {
    let outerVariable = 'I am from the outer function';
  
    // Inner function
    function innerFunction() {
      console.log(outerVariable);  // Accesses outerVariable from the outer function
    }
  
    return innerFunction;  // Return the inner function (closure)
  }
  
  const closureFunc = outerFunction();  // outerFunction() returns innerFunction
  
  closureFunc();  // Output: I am from the outer function
  