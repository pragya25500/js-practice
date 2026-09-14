// let myName = "rin    "
// console.log(myName.trueLength);


let myHeros = ["nightwing", "flash"]


let heroPower = {
    nightwing: "acrobats",
    flash: "speed",

    getFlashPower: function(){
        console.log(`flashpower is ${this.flash}`);
    }
}

Object.prototype.rin = function(){
    console.log(`rin is present in all objects`);
}

Array.prototype.heyrin = function(){
    console.log(`rin says hello`);
}

// heroPower.rin()
// myHeros.rin()
// myHeros.heyrin()
// heroPower.heyrin()

// inheritance

const User = {
    name: "rin",
    email: "rin@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "Code     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"rin".trueLength()
"pragya".trueLength()