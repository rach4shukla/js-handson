class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }

    static createId(){
        return `123`
    } //static helps in not giving access to method
}

// const rachna = new User("Rachna")
console.log(rachna.createId());

class Teacher extends User{
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const iPhone = new Teacher("iPhone", "i@phone.com")
console.log(iPhone.createId());
