
//var c=300
let a=300
if (true) {
    let a=10
    const b = 20
    // console.log("INNER:",a);
    
}
// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username="rin"

    function two(){
        const website="yt"
        console.log(username);
    }
    // console.log(website);
     two()

}
// one()

if (true) {
    const username="rin"
    if (username==="rin") {
        const website="yt"
        // console.log(username+website);
    }
    // console.log(website);
}

// console.log(username);



console.log(addone(5))

function addone(n){
    return n+1
}



//addtwo(5)
const addtwo=function(n){
    return n+2
}