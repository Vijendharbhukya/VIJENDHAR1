// callback function:that pass arguments as funcion
//async call/task--once this task is completed-- then only callback function will be called

// basic callback:
function greet(name, callback){
    console.log('Hello'+ name);//normal/sync step/task,could be async call/api
    callback();
}
//callback function
function welcome(){
    console.log('Welcome!!!')
}
greet('Vijendhar',welcome)
console.log('-------------')

//callback with async function:
function printInfo(name, callback){
//async function/task/step:
setTimeout(function(){//function() ---given an aynonimous function 
    console.log('printting info for ' + name);
    callback('plz call me back.....');
},1000);//delay of 1000ms/1 sec
}
//callback function
function displayMssg(mssg){
    console.log(mssg)
}
printInfo('Jannu', displayMssg)

// 2.
function fetchData(userId, callback){
    setTimeout(function(){
        const users={
            1:{id:1,name:'v'},
            2:{id:2,name:'s'}
        };
        const user=users[userId]
        if(user){
            callback(null,user)
        } else{
            callback("User not found..",null)
        }
    },2000)
}
function handleUserData(error,user){
    if(error){
        console.log("Error:" , error)
    }
    else{
        console.log("User:" , user)
    }
}
fetchData(1,handleUserData)//User: { id: 1, name: 'v' }