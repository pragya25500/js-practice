const user = {
    username: "rin",
    loginCount: 5,
    signedIn: true,

    getUserDetails: function(){
        //console.log("got user details from database");
        //console.log(`Username: ${this.username}`);
        //console.log(this);
    }

}



//console.log(user.username)
//console.log(user.getUserDetails());
//console.log(this);


function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn
    this.greeting = function(){
    console.log(`Welcome ${this.username}`);
   }
    return this
}

const userOne = new User("rin", 9, true)
const userTwo = new User("pragya", 10, false)
console.log(userOne.constructor);
console.log(userTwo);