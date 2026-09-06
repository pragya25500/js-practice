
//object literals

const sym=Symbol("key1")

const user={
    name:"rin",
    [sym]:"key1",
    age:19,
    loc:"kolkata",
    email:"rin@gmail.com",
    isloggedin:false,
    lastloggedin:["monday"]
}
//console.log(user[sym]);

user.email="r@gmail.com"
//Object.freeze(user)
user.email="rr@gmail.com"
//console.log(user);

user.greeting=function(){
    console.log("hi user");
    
}
//console.log(user.greeting);
//console.log(user.greeting());

user.greeting2=function(){
    console.log('hi user, ${this.name}');
    
}
console.log(user.greeting());
console.log(user.greeting2());
