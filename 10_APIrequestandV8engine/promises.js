// fetch('https://Something.com').then().catch().finally()

// how to make promises
// new keyword is imp
// when promises were not there in JS, we used Q or Bluebird libraries

const promiseOne = new Promise(function(resolve, reject){
    // Do an async task
    // DB calls, cryptography, network call
    setTimeout(function(){
        console.log('Async task is complete');
        resolve()
    }, 1000)
}) 

// to consume promise
promiseOne.then(function(){
    console.log("Promise consumed");  
})
// resolve --> connected to .then() -- then has a callback function

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    }, 1000)
}).then(function(){
    console.log("Async 2 resolved");
    
})

const PromiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "Rachna", email: "rachna@example.com"})
    }, 1000)
})

PromiseThree.then(function(user){
    console.log(user);
}) // data consumption

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username: "Rachna", password: "123"})
        } else {
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})

promiseFour.then(function(user){
    console.log(user);
    return user.username  
}).then((username) => {
    console.log(username);
}).catch(function(error){
    console.log(error);
})

