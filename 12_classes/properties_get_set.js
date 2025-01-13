// ++++++ OLD WAY OF GET SET of value ++++++

// function based syntax

function User(email, password){
    this._email = email;
    this._password = password;

    Object.defineProperty(this, 'email', {
        get: function(){
            return this._email.toUpperCase()
        },
        set: function(value){
            this._email = value
        }
    })

    Object.defineProperty(this, 'password', {
        get: function(){
            return this._password.toUpperCase()
        },
        set: function(value){
            this._password = value
        }
    })
}

const chai = new User("chai@chai.com", "chai")
console.log(chai.email);

// Object based syntax

const User = {
    _email: 'chai@gmail.com',
    _password: 'abc',

    get email(){
        return this._email.toUpperCase()
    },
    set email(value){
        this._email = value
    }
}

const tea = Object.create(User) // factory function
// new is constructor function

console.log(tea.email); // can be accessed

// _email --> underscore means private property but after get set _ does not mean much meaning to JS
// getter setter methods to overwrite email by getting it from memory



