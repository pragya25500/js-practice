const descripter = Object.getOwnPropertyDescriptor(Math, "PI")
// console.log(descripter);

// console.log(Math.PI);
// Math.PI = 5
// console.log(Math.PI);

const rin = {
    name: 'rin rin',
    price: 250,
    isAvailable: true,

    orderChai: function(){
        console.log("hello");
    }
}

console.log(Object.getOwnPropertyDescriptor(rin, "name"));

Object.defineProperty(rin, 'name', {
    //writable: false,
    enumerable: true,
    
})

console.log(Object.getOwnPropertyDescriptor(rin, "name"));

for (let [key, value] of Object.entries(rin)) {
    if (typeof value !== 'function') {
        
        console.log(`${key} : ${value}`);
    }
}