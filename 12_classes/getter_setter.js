class User{
    constructor(email, password){
        this.email = email;
        this.password = password;
    }

    get email(){
        return this._email.toUpperCase()
    } // return always comes in getters only

    set email(value){
        this._email = value
    }

    get password(){
        return `${this._password}rachna`
    }

    // set password(value){
    //     this.password = value.toUpperCase()
    // } //  maximum call size exceed

    set password(value){
        this._password = value
    }
}

const rachna = new User("r@rachna.ai", "abc")
console.log(rachna.password);

// +++++ GETTERS and SETTERS +++++ present by default in every class


