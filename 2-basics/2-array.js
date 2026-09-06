const dc=["nightwing","redhood","robin"]
const marvel=["spiderman","ironman","loki"]

dc.push(marvel)
//console.log(dc);
//console.log(dc[3][1]);

//const all=dc.concat(marvel)
//console.log(all);

const newheroe = [...dc,...dc]
//console.log(newheroe);

const array=[1,2,[3,4],[5,[6,7]]]
const realarr=array.flat(Infinity)
//console.log(realarr);

console.log(Array.isArray("rin"));
console.log(Array.from("rin"));
console.log(Array.from({name:"rin"}));

let score=200
let score2=400
let score3=600

console.log(Array.of(score,score2,score3));




