class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }

    static createId(){
        return `123`
    }
}

const rin = new User("rin")
//console.log(rin.createId())

class Teacher extends User {
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const phone = new Teacher("phone", "ph@phone.com")
console.log(phone.createId());