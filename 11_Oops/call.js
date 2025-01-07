// execution context --> global EC + EC + EC

// when function is inside another function 

// this keyword -- refers to global execution context. --> window object

function setUsername(username){
    // complex DB calls
    this.username = username
    console.log("called");
    
}

function createUser(username, email, password){
    // setUsername(username) // will not be called, only reference given
    setUsername.call(this, username)
    this.email = email
    this.password = password
}

const rachna = new createUser("rachna", "rachna@google.com", "123")
console.log(rachna);
