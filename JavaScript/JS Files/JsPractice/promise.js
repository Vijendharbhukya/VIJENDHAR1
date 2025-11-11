//promise are widely used for tasks like making network requests,reading/writing files, and other operators 
//It can be in one of three states:Pending, fulfilled, or rejected.

const randomNumber = new Promise((resolve, reject) => {
  setTimeout(() => {
    const randomValue = Math.random();
    if (randomValue > 0.5) {
      resolve(randomValue);
    } else {
      reject(new Error("value is too small"));
    }
  }, 2000);
});

randomNumber
  .then(result => {
    console.log("Promise is fulfilled with value:", result);
  })
  .catch(error => {
    console.log("Promise is rejected", error);
  });
