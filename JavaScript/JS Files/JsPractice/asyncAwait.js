//async-await-modern way of handling async calls/steps
//-used with promise
//async keyword-before function name
//await keyword/operator: async steps

//Async function(){
//it will return a promise-Mandatory-resolve/rejected
//}


//fetchingAPI data
// Simulate an asynchronous API call
// Simulate an asynchronous API call
function fetchUserData(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (userId === 1) {
        resolve({ id: 1, name: "Vijendhar", role: "Senior Software Engineer" });
      } else {
        reject("User not found");
      }
    }, 1000);
  });
}

// Async function using await
async function getUserInfo(userId) {
  try {
    console.log("Fetching user data...");
    const user = await fetchUserData(userId); // Waits for the promise to resolve
    console.log("User data received:", user);
  } catch (error) {
    console.error("Error:", error);
  }
}

// Call the async function
getUserInfo(1);