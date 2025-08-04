//find() – Return the first element that matches a condition
const users = [{name: "Aarav"}, {name: "Sara"}];
const user = users.find(u => u.name === "Sara");
console.log(user); // {name: "Sara"}
