fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json()
}).then((data) => {
    console.log(data);
    
}).catch((error) => console.log(error))

// fetch() is global function / method
// fetch() --> error 404 is visible in response and not in resolve

// fetch() --> is executed first because of VIP (priority queue or microtask queue) 
// even though the timing is same for other callbacks

/* It works in 2 parts:

Data : Onfulfilled[] --> promise resolve
        OnRejection[] --> promise reject

Web Browsers/ node --> network request --> yes --> Onfulfilled[] and No --> OnRejection[]

*/