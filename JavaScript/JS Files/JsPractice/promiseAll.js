const { result } = require("lodash");

//case1:
const function1=()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            // resolve("data from function1");
            const da=[1,2,3,4,5]
            resolve(da)
        },2000);
    });
};
const function2=()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            // resolve("data from function2");
            const da=[6,7,8]
            resolve(da)
        },2000);
    });
};
const function3=()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            //resolve("data from function3");
            const da=[9,10,11]
            resolve(da)
        },2000);
    });
};
Promise.all([
    function1(),
    function2(),
    function3()
])
.then(dataArray=>{
    console.log("All data from diff function", dataArray);
})
.catch(error=>{
    console.log('Error in Promise',error)
})
console.log('.....................................')
//Case2:promise.allSettled()
const getData1=()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("data from getData1");
            // const da=[1,2,3,4,5]
            // resolve(da)
        },2000);
    });
};
const getError1=()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
             reject("data from getError1");
            // const da=[1,2,3,4,5]
            // resolve(da)
        },2000);
    });
};
Promise.allSettled([
    getData1(),
    getError1()
])
.then(results =>{
    results.forEach(result=>{
        if(result.status==='fullfilled'){
    console.log("Value:",result.value)
        }else{
            console.log("Reason for rejection:",result.reason)
        }
    })
})
.catch(error=>{
    console.log("Error Occured:",error)
})
console.log('.....................................1')
// promise.all()
//Case2:
//RESOLVE
//REJECT
const getData=()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("data from getData");
            // const da=[1,2,3,4,5]
            // resolve(da)
        },2000);
    });
};
const getError=()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
             resolve("data from getError");
            // const da=[1,2,3,4,5]
            // resolve(da)
        },2000);
    });
};
Promise.all([
    getData(),
    getError()
])
.then(dataArray=>{
    console.log("All data fetched:",dataArray)
})
.catch(error=>{
    console.log("Error Occured:",error)
})
console.log('.....................................2')


