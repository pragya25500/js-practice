const User = {
    _email: 'rin@gmail.com',
    _password:"abc",

    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email = value
    }
}

const r = Object.create(User)
console.log(r.email);