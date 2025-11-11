// const fetchUserInfo=async ()=>{
// const resp=await fetch('Api from postman')
// if(!resp.ok){
//     throw new Error('user data not found....')
// }
// //parse json response
// const userData=resp.json()
// console.log(userData)
// }
// fetchUserInfo();

//
async function createUser() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: 'Vijendhar',
        email: 'vijendhar@example.com'
      })
    });

    if (!response.ok) {
      throw new Error("Failed to create user");
    }

    const data = await response.json();
    console.log("User created:", data);
  } catch (error) {
    console.error("Error:", error);
  }
}

createUser();
