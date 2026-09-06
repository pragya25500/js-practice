
function name(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}
//name()

//function add2nos(n1,n2){
//console.log(n1+n2);
//}

function add2nos(n1,n2){
let result = n1 + n2
return result
return n1 + n2
}
const result = add2nos(3,5)
//console.log("result:",result);

function loginUserMessage(username = "rin"){
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

//console.log(loginUserMessage("r"))
//console.log(loginUserMessage("r"))


function calculateCartPrice(val1, val2, ...num1){
    return num1
}
//console.log(calculateCartPrice(200, 400, 500, 2000))


const user = {
    username: "rin",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

//handleObject(user)
handleObject({
    username: "rin",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

//console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));