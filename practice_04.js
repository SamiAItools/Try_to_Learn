/*const person = {
    name : "p1"
    ,
getName: function(){
return this.name
}
}
const p2 = { name : "p2" }
console.log(person.getName.call(p2) )

const object = { a: 1, b: 2, c: 3 };
for (const property in object) {
 console.log(`${property}: ${object[property]}`);
}

// use map to create a new array by performing a function on each array element
const numbers = [1, 2, 3, 4, 5];
const numbers2 = numbers.map(item=>item*2)
console.log(numbers2);

// apply filter to an array
const numbers = [1, 2, 3, 4, 5];
const numbers2 = numbers.filter(item=>item>3)
console.log(numbers2);

 //use reduce to find the sum of an array
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((total, item)=>total+item,0)
console.log(sum);

const arr1 = [0, 1, 2, [3, 4]];
console.log(arr1.flat());

console.log(0);
console.log(1);
console.log(2);
setTimeout(()=>{
 console.log('I am in Settimeout')
},4000)
console.log(54);
console.log(145);
console.log(245);
*/
function delayedFx(){
    return new Promise((resolve, reject)=>{
        reject('Some Error Occured')
    })
}
let x=delayedFx()
x.then((result)=>{
    console.log(result)
}).catch
((error)=>{
    console.log(error)
})
console.log(0);
