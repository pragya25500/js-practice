class User {
    constructor(email, password){
        this.email = email;
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }

    get password(){
        return `${this._password}rin`
    }

    set password(value){
        this._password = value
    }
}

const rin= new User("rin@gmail.com", "abc")
console.log(rin.email);