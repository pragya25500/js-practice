

//class User {
   // constructor(username, email, password){
    //    this.username = username;
    //    this.email = email;
    //    this.password = password
  //  }

   // encryptPassword(){
    //    return `${this.password}abc`
 //   }
  //  changeUsername(){
    //    return `${this.username.toUpperCase()}`
   // }

//}

//const rin = new User("rin", "rin@gmail.com", "123")

//console.log(rin.encryptPassword());
//console.log(rin.changeUsername());

//

function User(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password
}

User.prototype.encryptPassword = function(){
    return `${this.password}abc`
}
User.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}


const pragya = new User("pragya", "pragya@gmail.com", "123")

console.log(pragya.encryptPassword());
console.log(pragya.changeUsername());